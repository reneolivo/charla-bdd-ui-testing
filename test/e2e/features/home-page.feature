Feature: Home Page
  As a user of the rent-a-car portal
  I want to be able to access the welcome page
  And see a list of cars that I'm able to rent
  So that I can have a range of cars to choose from

Scenario: Page title
  Given I access "/welcome"
  Then the page title should be "Welcome | Awesome Rent-A-Car"

Scenario: List of cars
  Given a list of cars to rent
  And I access the "/welcome" page
  Then I'm able see the list of cars

Scenario: Car details
  Given a list of cars to rent
  And I access the "/welcome" page
  Then each car should display the following fields:
    | a picture                    |
    | a name                       |
    | a description                |
    | an availability identifier   |
    | and a price                  |
