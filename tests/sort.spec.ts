import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test.describe('Sort Feature', () => {
  test.beforeEach(async ({ page }) => {
    const products = new ProductsPage(page);
    await products.goto();
  });

  test('should sort products A to Z', async ({ page }) => {
    const products = new ProductsPage(page);
    await products.sortBy('az');

    const names = await products.getProductNames();
    const expected = [...names].sort((a, b) => a.localeCompare(b));
    expect(names).toEqual(expected);
  });

  test('should sort products Z to A', async ({ page }) => {
    const products = new ProductsPage(page);
    await products.sortBy('za');

    const names = await products.getProductNames();
    const expected = [...names].sort((a, b) => b.localeCompare(a));
    expect(names).toEqual(expected);
  });

  test('should sort products from Low to High price', async ({ page }) => {
    const products = new ProductsPage(page);
    await products.sortBy('lohi');

    const prices = await products.getProductPrices();
    const expected = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(expected);
  });

  test('should sort products from High to Low price', async ({ page }) => {
    const products = new ProductsPage(page);
    await products.sortBy('hilo');

    const prices = await products.getProductPrices();
    const expected = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(expected);
  });
});
