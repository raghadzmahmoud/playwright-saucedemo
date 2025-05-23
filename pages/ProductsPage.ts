import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }

  async addToCart(productName: string) {
    const itemButton = this.page.locator(`.inventory_item:has-text("${productName}") button`);
    await itemButton.waitFor({ state: 'visible' }); 
    await itemButton.click();
  }

  async removeFromCart(productName: string) {
    const itemButton = this.page.locator(`.inventory_item:has-text("${productName}") button`);
    await itemButton.click();
  }

  async openCart() {
    await this.page.click('.shopping_cart_link');
  }

  async sortBy(optionValue: string) {
    await this.page.selectOption('[data-test="product-sort-container"]', optionValue);
  }

  async getProductNames(): Promise<string[]> {
    return this.page.locator('.inventory_item_name').allTextContents();
  }

  async getProductPrices(): Promise<number[]> {
    const prices = await this.page.$$eval('.inventory_item_price', elements =>
      elements.map(el => parseFloat(el.textContent!.replace('$', '')))
    );
    return prices;
  }

  async isProductInCart(productName: string): Promise<boolean> {
    const item = this.page.locator('.cart_item').filter({ hasText: productName });
    return await item.count() > 0;
  }
}
