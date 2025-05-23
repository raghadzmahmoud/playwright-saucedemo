import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Remove from Cart Feature', () => {
  let products: ProductsPage;

  test.beforeEach(async ({ page }) => {
    products = new ProductsPage(page);
    await products.goto();
    await products.addToCart('Sauce Labs Backpack');
    await products.addToCart('Sauce Labs Bike Light');
  });

  test('should remove one item from cart and keep the other', async ({ page }) => {
    await products.removeFromCart('Sauce Labs Backpack');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('should remove all items from cart', async ({ page }) => {
    await products.removeFromCart('Sauce Labs Backpack');
    await products.removeFromCart('Sauce Labs Bike Light');
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
  });

  test('should not show cart badge after removing all items', async ({ page }) => {
    await products.removeFromCart('Sauce Labs Backpack');
    await products.removeFromCart('Sauce Labs Bike Light');
    const badge = page.locator('.shopping_cart_badge');
    await expect(badge).toHaveCount(0);
  });
});
