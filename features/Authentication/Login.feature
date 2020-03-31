Feature: Login

  As a user, I want to be able to log in to my account to view account details

  Scenario Outline: Attempting to log in with valid credentials; <email>
    Given the browser is at the "Login" page
    When the user tries to use "valid" credentials, "<email>" to log in
    Then they are successfully logged in

    @dev
    Examples:
      | email                             |
      | cucumber_automation_dev@gmail.com |
    
    @int
    Examples:
      | email                             |
      | cucumber_automation_int@gmail.com |