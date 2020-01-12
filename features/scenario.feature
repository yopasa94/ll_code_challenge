Feature: Automate 
     As an Engr. Candidate
     I need to automate http://www.way2automation.com/angularjs-protractor/webtables/
     So I can show my automation capabilities
     
@CucumberScenario
Scenario: Add a user and validate the user has been added to the table
  
  Given I am in the webtablePage using chrome
    When I enter to add user option 
    And I fill the user info
    |FirstName|LastName|UserName|Password|Email|CellPhone|
    |James|Smith|Smith123|qwerty|Smith@mail.com|123456789|
    Then the new user should should appear in the table

@CucumberScenario
Scenario: Delete user User Name: novak and validate user has been deleted
  
  Given I am in the webtablePage using chrome
    When I delete the "Novak" user
    Then the "Novak" user should be removed from the list