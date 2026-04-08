// Generated from: tests\features\practo.feature
import { test } from "playwright-bdd";

test.describe('Search Medicine Functionality', () => {

  test('Search with valid medicine name', async ({ Given, When, Then, And, page }) => { 
    await Given('User is on the Order Medicines page', null, { page }); 
    await When('User clicks on the search bar'); 
    await And('User enters a valid medicine name'); 
    await Then('Relevant medicine suggestions should be displayed', null, { page }); 
  });

  test('Search with a partial medicine name', { tag: ['@searchpartial'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('User is on the Order Medicines page', null, { page }); 
    await When('User clicks on the search bar'); 
    await And('User enters a partial medicine name'); 
    await Then('Relevant medicine suggestions should be displayed', null, { page }); 
  });

  test('Search with a valid medicine name', { tag: ['@searchValidation'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('User is on the Order Medicines page', null, { page }); 
    await When('User clicks on the search bar'); 
    await And('User enters a medicine name'); 
    await Then('Relevant medicine suggestions should be displayed', null, { page }); 
    await When('User clicks on a relevant search result'); 
    await Then('User should be navigated to the results page', null, { page }); 
  });

  test('Validate navigation to Skin Care category in new window', { tag: ['@health'] }, async ({ Given, When, Then, And, context, page }) => { 
    await Given('User is on the Order Medicines page', null, { page }); 
    await When('User clicks on the Skin Care category', null, { context }); 
    await Then('A new window should open for Skin Care page'); 
    await And('User should be navigated to the Skin Care page'); 
    await And('Skin Care related content should be displayed'); 
  });

  test('Add a medicine to cart', { tag: ['@addtocart'] }, async ({ Given, When, Then, page }) => { 
    await Given('User is on the medicine details page', null, { page }); 
    await When('User clicks on Add to Cart button'); 
    await Then('View Cart button should be displayed'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\practo.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is on the Order Medicines page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on the search bar","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And User enters a valid medicine name","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then Relevant medicine suggestions should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":11,"tags":["@searchpartial"],"steps":[{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given User is on the Order Medicines page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When User clicks on the search bar","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And User enters a partial medicine name","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Relevant medicine suggestions should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":18,"tags":["@searchValidation"],"steps":[{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given User is on the Order Medicines page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When User clicks on the search bar","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And User enters a medicine name","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Relevant medicine suggestions should be displayed","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When User clicks on a relevant search result","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then User should be navigated to the results page","stepMatchArguments":[]}]},
  {"pwTestLine":29,"pickleLine":29,"tags":["@health"],"steps":[{"pwStepLine":30,"gherkinStepLine":30,"keywordType":"Context","textWithKeyword":"Given User is on the Order Medicines page","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When User clicks on the Skin Care category","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then A new window should open for Skin Care page","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"And User should be navigated to the Skin Care page","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"And Skin Care related content should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":37,"pickleLine":39,"tags":["@addtocart"],"steps":[{"pwStepLine":38,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given User is on the medicine details page","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When User clicks on Add to Cart button","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then View Cart button should be displayed","stepMatchArguments":[]}]},
]; // bdd-data-end