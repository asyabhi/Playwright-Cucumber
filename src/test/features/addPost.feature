Feature: Conduit Login Functionality

    Scenario: Login and Logout with valid credentials
        Given I am on the Conduit Login Page
        When I login with valid credentials
        And I click on New Post button
        And I fill up the required fields
        And I publish the article
        Then I should see the article posted