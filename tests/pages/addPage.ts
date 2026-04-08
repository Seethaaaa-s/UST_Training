import { Page } from '@playwright/test';

export class AddPage {
    readonly page: Page;
    readonly addToCartBtn;
    readonly viewCartBtn;

    constructor(page: Page) {
        this.page = page;

        this.addToCartBtn = page.locator("//div[@class='image-carousel--product_add-cart u-cur--ptr']");
        
        this.viewCartBtn = page.locator("//span[text()='View Cart']");
    }

    async navigateToMedicinePage() {
        await this.page.goto("https://www.practo.com/medicine-info/dolo-100-mg-drops-3654");
    }

    async clickAddToCart() {
        await this.addToCartBtn.click();
    }
}