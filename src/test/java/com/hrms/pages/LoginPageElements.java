package com.hrms.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.hrms.testbase.BaseClass;
import com.hrms.testbase.PageInitializer;
import com.hrms.utils.ConfigsReader;

public class LoginPageElements extends PageInitializer {
	
	@FindBy(id = "txtUsername")
	public WebElement userNameTextBox;
	
	@FindBy(xpath = "//input[@id = 'txtPassword']")
	public WebElement passwordTextBox;
	
	@FindBy(css = "input#btnLogin")
    public WebElement btnLogin;
	
	@FindBy(id = "divLogo")
	public WebElement syntaxLogo;
	
	@FindBy(id = "spanMessage2")
	public WebElement spanMessage;
	
	@FindBy(id = "logInPanelHeading")
	public WebElement loginPanelHeading;
	
	
	public void loginToHrms(String username, String password) {
		login.userNameTextBox.sendKeys(username);
		login.passwordTextBox.sendKeys(password);
		login.btnLogin.click();
	}
	
	
	public LoginPageElements() {
		PageFactory.initElements(driver, this);
	}
	
	
	
}
