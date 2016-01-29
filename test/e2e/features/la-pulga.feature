Feature: Searching in La Pulga

  Scenario: Searching for shoes
    Given I navigate to "http://lapulga.com.do/"
    When I search for "zapato"
    And click on "btnbuscar"
    Then I should be able to see a list of shoes
