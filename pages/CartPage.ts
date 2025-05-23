export class CartPage {
  constructor(private page: any) {}

  async isProductInCart(productName: string) {
    return this.page.locator(`.cart_item:has-text("${productName}")`).isVisible();
  }
}
