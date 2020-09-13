package com.hrms.runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/features/Login.feature",
				glue="com/hrms/stepDefinitions",
				dryRun=false,
				monochrome=true,
				tags="@smoke",
				strict=false,
				plugin= {"pretty","html:target/cucumber-default-reports",
		"rerun:target/FailedTests.txt",
		"json:target/cucumber.json"})
				
public class TestRunner {

}
