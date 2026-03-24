import { test, expect } from "@playwright/test";


//1

test("Validate suggestion box functionality with partial medicine names", async ({ page }) => {

  await page.goto("https://www.practo.com/order?utm_source=practo_home");

 const searchBox = page.locator('input[placeholder="Search for medicines, health products and more"]');
  await expect(searchBox).toBeVisible();

  const medicineName = "Dolo";

  await searchBox.click();

  await searchBox.type(medicineName, { delay: 200 });

  
   const suggestion = page.getByRole('link', { name: /Dolo/i }).first();
  await expect(suggestion).toBeVisible();
    await expect(suggestion.first()).toBeVisible({ timeout: 10000 });

     await page.waitForTimeout(10000); 

}); 

//2

test("Validate medicine search results", async ({ page }) => {

  await page.goto("https://www.practo.com/order?utm_source=practo_home");

 const searchBox = page.locator('input[placeholder="Search for medicines, health products and more"]');
  await expect(searchBox).toBeVisible();

  const medicineName = "Dolo";

  await searchBox.click();
  await searchBox.type(medicineName, { delay: 200 });

  
   const suggestion = page.getByRole('link', { name: /Dolo/i }).first();
  await expect(suggestion).toBeVisible();
    await expect(suggestion.first()).toBeVisible({ timeout: 10000 });

  
  await Promise.all([
    page.waitForURL(/dolo/i),   
    suggestion.click(),
  ]);

    await expect.soft(page.url()).toBe("https://www.practo.com/medicine-info/dolo-100-mg-drops-3654");
 
    await page.waitForTimeout(10000);






}); 



//3

test("Validate suggestion box functionality with full medicine names", async ({ page }) => {

  await page.goto("https://www.practo.com/order?utm_source=practo_home");

  
 const searchBox = page.locator('input[placeholder="Search for medicines, health products and more"]');
  await expect(searchBox).toBeVisible();

  const medicineName = "Dolo Drops";

  await searchBox.click();
  await searchBox.type(medicineName, { delay: 200 });


  const suggestion = page.getByRole('link', { name: /Dolo Drops/i });

  await expect(suggestion.first()).toBeVisible();
  await page.waitForTimeout(10000); 
})


//4



test("Validate health condition functionality", async ({ page }) => {
  await page.goto("https://www.practo.com/order");

 await page.locator("//div[contains(@class,'h-w-c__slider__image')]//img").first().click();

 await expect(page).toHaveURL(/skin-care/);
 
 await page.waitForTimeout(10000); 

 

});



//5
test("To verify cart", async ({page}) => {
    await page.goto("https://www.practo.com/medicine-info/dolo-100-mg-drops-3654");

    await page.locator("//div[@class='image-carousel--product_add-cart u-cur--ptr']").click();

    await expect(page.locator("//button[@class = 'button button__primary button--default button__active button__normal button__undefined  button-hover']/child::span[text()= 'View Cart']")).toBeVisible();

    
}) 


//6
test("Validate suggestion box functionality with invalid medicine names", async ({ page }) => {

  await page.goto("https://www.practo.com/order?utm_source=practo_home");

 const searchBox = page.locator('input[placeholder="Search for medicines, health products and more"]');
  await expect(searchBox).toBeVisible();

  const medicineName = "been";

  await searchBox.click();

  await searchBox.type(medicineName, { delay: 200 });

  
   const suggestion = page.getByRole('link', { name: /Dolo/i }).first();
  await expect(suggestion).toBeVisible();
    await expect(suggestion.first()).toBeVisible({ timeout: 10000 });

     await page.waitForTimeout(10000); 

}); 
