Feature: Aurelia Skeleton App
  As a user of the Skeleton App
  I want to be able to go to the index page
  And I want to see a main menu
  So I can navigate to other sections

Scenario: Navigating to the index page
  Given I access "/welcome"
  Then the title page title should be "Welcome | Aurelia"
