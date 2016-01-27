Feature: Renting a car
  As a user I want to be able to rent
  a car through the portal
  So I can speed up the renting process
  before picking up the car at the rental

Scenario: Trying to rent an available car
  Given I access "/cars/1"
  When I click on reserve a car
  Then I should be taken to the car reservation page

Scenario: Trying to rent an unavailable car
  Given I access "/cars/2"
  And car 2 is not available
  When I click on reserve a car
  Then I should see a warning telling me that the car is not available

Scenario: Renting a car
  Given I try to rent car 1
  When I set the pickup date to tomorrow
  And I set the dropoff date to 5 days from now
  And I submit my rent request
  Then I should see a success message
