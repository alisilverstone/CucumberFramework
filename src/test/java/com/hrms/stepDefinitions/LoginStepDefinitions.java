package com.hrms.stepDefinitions;

import org.junit.Assert;

import com.hrms.utils.CommonMethods;
import com.hrms.utils.ConfigsReader;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginStepDefinitions extends CommonMethods {


	@When("login with valid credentials")
	public void login_with_vlaid_credentials() {
	  sendText(login.userNameTextBox, ConfigsReader.getPropValue("username"));
	  sendText(login.passwordTextBox, ConfigsReader.getPropValue("password"));
	  click(login.btnLogin);
	}

	@Then("verify the dashboard logo is displayed")
	public void verify_the_dashboard_logo_is_displayed() {
	   Assert.assertTrue(dash.welcome.isDisplayed());
	}

	
	@When("login with invalid credentials.")
	public void login_with_invalid_credentials() {
	    login.loginToHrms("Admin", "Hum@nHRM12");
	    
	}

	@Then("verify the error message")
	public void verify_the_error_message() {
	   Assert.assertTrue(login.spanMessage.isDisplayed());
	}

	@When("attempt login with empty username")
	public void attempt_login_with_empty_username() {
	   login.loginToHrms("", "Hum@nHRM12");
	}

	@Then("verify spam message is Username cannot be empty")
	public void verify_spam_message_is_username_cannot_be_empty() {
		Assert.assertEquals("Empty user name check", "Username cannot be empty", login.spanMessage.getText());
	}
	@When("attempt login with empty password")
	public void attempt_login_with_empty_password() {
		  login.loginToHrms("Admin", "");
	}

	@Then("verify the spam message is {string}")
	public void verify_the_spam_message_is(String string) {
		Assert.assertEquals("Empty user name check", "Password cannot be empty", login.spanMessage.getText());
	}
	

}
