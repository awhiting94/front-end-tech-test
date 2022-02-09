Feature: Bet slip

  I want to be able to add and remove things from the bet slip 


  Scenario: Adding one selection to the bet slip 
    When I click on my first selection 
    Then My selection should be added to the bet slip where it is displayed 


  Scenario: Adding a second selection to the bet slip 
    When I click on my second selection 
    Then My selection should be added to the bet slip where both selections are now displayed 

  Scenario: Removing all selections from the bet slip 
    When I click the top bin icon in the bet slip  
    Then Both selections are removed from the bet slip  
