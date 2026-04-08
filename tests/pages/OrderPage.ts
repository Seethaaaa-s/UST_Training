import { Page } from '@playwright/test';

export class OrderPage {
    readonly page: Page;
    readonly searchBox;
    readonly suggestions;

    constructor(page: Page) {
        this.page = page;
        this.searchBox = page.locator('input[placeholder*="Search for medicines, health products and more"]');
        this.suggestions = page.locator('.search-bar__results'); // adjust if needed
    }

    async navigateToPage() {
        await this.page.goto('https://www.practo.com/order');
    }

    async clickSearchBar() {
        await this.searchBox.click();
    }

    async enterMedicineName(name: string) {
        await this.searchBox.fill(name);
    }
    async clickFirstSuggestion() {
    await this.page.getByRole('link', { name: /Dolo/i }).first().click();
}
}