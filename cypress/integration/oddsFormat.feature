Feature: Odds format 

  I want to be able to change the odds format and close the dropdown


  Scenario: Changing the odds format to decimal
    When I select the odds format "Decimal"
    Then I see "Decimal" is the current odds format displayed


  Scenario: Closing the odds format dropdown
    When The dropdown is displayed 
    And The cross icon is clicked 
    Then The dropdown should no longer be displayed 


  Scenario: Changing the odds format to american
    When I select the odds format "American"
    Then I see "American" is the current odds format displayed