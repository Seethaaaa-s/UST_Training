Feature: Search Medicine Functionality

Scenario: Search with valid medicine name
Given User is on the Order Medicines page
When User clicks on the search bar
And User enters a valid medicine name
Then Relevant medicine suggestions should be displayed


@searchpartial
Scenario: Search with a partial medicine name
Given User is on the Order Medicines page
When User clicks on the search bar
And User enters a partial medicine name
Then Relevant medicine suggestions should be displayed

@searchValidation
Scenario: Search with a valid medicine name
  Given User is on the Order Medicines page
  When User clicks on the search bar
  And User enters a medicine name
  Then Relevant medicine suggestions should be displayed
  When User clicks on a relevant search result
  Then User should be navigated to the results page


@health

Scenario: Validate navigation to Skin Care category in new window
Given User is on the Order Medicines page
When User clicks on the Skin Care category
Then A new window should open for Skin Care page
And User should be navigated to the Skin Care page
And Skin Care related content should be displayed



@addtocart
Scenario: Add a medicine to cart
  Given User is on the medicine details page
  When User clicks on Add to Cart button
  Then View Cart button should be displayed