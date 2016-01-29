Feature: Car Details
  As a user I want to be able to access
  any car details
  So I can make a better decision when
  renting a car

Scenario: Access car details from welcome page
  Given I access "/welcome"
  When I click on any car
  Then I should be redirected to that car details page

Scenario: Access car details directly
  Given I access "/cars/1"
  Then I should see the details for the car with the id 1

Scenario: Car details
  Given I access "/cars/1"
  Then car 1 should display the following fields:
    | a gallery of pictures        |
    | a name                       |
    | a description                |
    | an availability identifier   |
    | and a price                  |
