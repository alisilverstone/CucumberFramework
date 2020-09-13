Feature: Login Functionality

@smoke
Scenario: Login with valid credentials

When login with valid credentials
Then verify the dashboard logo is displayed


@smoke
Scenario: Login with invalid credentials

When login with invalid credentials.
Then verify the error message


@regression
Scenario: Invalid login with empty username

When attempt login with empty username
Then verify spam message is Username cannot be empty


@regression
Scenario: Invalid login with empty password

When attempt login with empty password
Then verify the spam message is "password cannot be empty"
