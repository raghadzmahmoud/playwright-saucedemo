import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test.describe('Add to Cart Feature', () => {
  test.beforeEach(async ({ page }) => {
    const products = new ProductsPage(page);
    await products.goto();
    await page.waitForLoadState('networkidle');
  });

  test('should add product to cart', async ({ page }) => {
    const products = new ProductsPage(page);
    const cart = new CartPage(page);
    await products.addToCart('Sauce Labs Backpack');
    await products.openCart();
    expect(await cart.isProductInCart('Sauce Labs Backpack')).toBeTruthy();
  });

  test('should add multiple products to cart', async ({ page }) => {
    const products = new ProductsPage(page);
    const cart = new CartPage(page);

    await products.addToCart('Sauce Labs Backpack');
    await products.addToCart('Sauce Labs Bike Light');
    await products.openCart();

    expect(await cart.isProductInCart('Sauce Labs Backpack')).toBeTruthy();
    expect(await cart.isProductInCart('Sauce Labs Bike Light')).toBeTruthy();
  });
});
