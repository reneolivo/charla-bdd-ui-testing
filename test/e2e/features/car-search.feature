@runThis
Feature: Search for a car model
  As as user I want to be able to
  search for a car model
  So that I can find a car that
  interests me.

  Scenario: search for a model
    Given I access "/search?model=1"
    Then I should be able to see the car "Mitsubishi Lancer 2010"
