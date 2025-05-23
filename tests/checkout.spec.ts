import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Checkout Feature', () => {
  test.beforeEach(async ({ page }) => {
    const products = new ProductsPage(page);
    await products.goto();
  });

  test('should complete checkout process', async ({ page }) => {
    const products = new ProductsPage(page);
    await products.addToCart('Sauce Labs Backpack');
    await products.openCart();

    await page.click('[data-test="checkout"]');
    await page.fill('[data-test="firstName"]', 'Raghad');
    await page.fill('[data-test="lastName"]', 'Mohammed');
    await page.fill('[data-test="postalCode"]', '12345');
    await page.click('[data-test="continue"]');
    await page.click('[data-test="finish"]');

    await expect(page.locator('.complete-header')).toContainText('Thank you for your order!');
  });
});
