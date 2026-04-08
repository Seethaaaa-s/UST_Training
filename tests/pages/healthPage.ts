import { Page } from '@playwright/test';

export class HealthPage {
    readonly page: Page;
    readonly skinCareLink;

    constructor(page: Page) {
        this.page = page;
        this.skinCareLink = page.locator('a[href*="skin-care"]').first();
    }

    async navigateToPage() {
        await this.page.goto('https://www.practo.com/order');
    }

    async clickSkinCare() {
        await this.skinCareLink.click();
    }
}

