import{test,expect} from '@playwright/test'
import{createBdd} from 'playwright-bdd'
const {Given,When,Then}=createBdd();

import { OrderPage } from '../pages/OrderPage';

import { HealthPage } from '../pages/healthPage';
import { AddPage } from '../pages/addPage';

let orderPage: OrderPage;
let healthPage: HealthPage;
let newPage : any;
let addPage: AddPage;



Given('User is on the Order Medicines page', async function ({ page }) {
  healthPage = new HealthPage(page);
    orderPage = new OrderPage(page);
    await orderPage.navigateToPage();
});

When('User clicks on the search bar', async function () {
    await orderPage.clickSearchBar();
});

When('User enters a valid medicine name', async function () {
    await orderPage.enterMedicineName('dolo');
});

Then('Relevant medicine suggestions should be displayed', async ({ page }) => {        
  const suggestion = page.getByRole('link', { name: /Dolo/i });
  await expect(suggestion.first()).toBeVisible();
});

When('User enters a partial medicine name', async function () {
    await orderPage.enterMedicineName('dol'); 
});

When('User enters a medicine name', async function () {
    await orderPage.enterMedicineName('dolo');
});

When('User clicks on a relevant search result', async function () {
    await orderPage.clickFirstSuggestion();
});

Then('User should be navigated to the results page', async ({ page }) => {
    await expect(page).toHaveURL(/medicine-info\/dolo/);
    await page.waitForTimeout(3000);
});

When('User clicks on the Skin Care category', async function ({ context }) {

    const [pageOpened] = await Promise.all([
        context.waitForEvent('page'),
        healthPage.clickSkinCare()
    ]);

    newPage = pageOpened;
    await newPage.waitForLoadState();
});

Then('A new window should open for Skin Care page', async function () {
    await expect(newPage).toBeTruthy();
});
Then('User should be navigated to the Skin Care page', async function () {
    await expect(newPage).toHaveURL(/health-products\/skin-care/, { timeout: 10000 });
});

Then('Skin Care related content should be displayed', async function () {
    await newPage.waitForLoadState('networkidle');

    const heading = newPage.locator('h1.heading-biggest-bold.u-display--inline-block');

    await expect(heading).toBeVisible();
    await expect(heading).toHaveText(/skin care/i);
});


Given('User is on the medicine details page', async function ({ page }) {
    addPage = new AddPage(page);
    await addPage.navigateToMedicinePage();
});

When('User clicks on Add to Cart button', async function () {
    await addPage.clickAddToCart();
});

Then('View Cart button should be displayed', async function () {
    await expect(addPage.viewCartBtn).toBeVisible();
});