$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login with valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.stepDefinitions.LoginStepDefinitions.login_with_vlaid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the dashboard logo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepDefinitions.LoginStepDefinitions.verify_the_dashboard_logo_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\n\tat io.cucumber.core.plugin.PrettyFormatter.printEmbedding(PrettyFormatter.java:179)\n\tat io.cucumber.core.plugin.PrettyFormatter.handleEmbed(PrettyFormatter.java:173)\n\tat io.cucumber.core.eventbus.AbstractEventPublisher.send(AbstractEventPublisher.java:45)\n\tat io.cucumber.core.eventbus.AbstractEventBus.send(AbstractEventBus.java:9)\n\tat io.cucumber.core.runtime.ThreadLocalRunnerSupplier$SynchronizedEventBus.send(ThreadLocalRunnerSupplier.java:100)\n\tat io.cucumber.core.runtime.ThreadLocalRunnerSupplier$LocalEventBus.send(ThreadLocalRunnerSupplier.java:68)\n\tat io.cucumber.core.runner.TestCaseState.attach(TestCaseState.java:68)\n\tat io.cucumber.java.Scenario.attach(Scenario.java:57)\n\tat com.hrms.stepDefinitions.Hooks.endTest(Hooks.java:25)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Login with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "login with invalid credentials.",
  "keyword": "When "
});
formatter.match({
  "location": "com.hrms.stepDefinitions.LoginStepDefinitions.login_with_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hrms.stepDefinitions.LoginStepDefinitions.verify_the_error_message()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#spanMessage2\"}\n  (Session info: chrome\u003d85.0.4183.102)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Alis-MBP.home\u0027, ip: \u0027fe80:0:0:0:1814:4cb0:465:c27f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 85.0.4183.102, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: /var/folders/11/46rp085d727...}, goog:chromeOptions: {debuggerAddress: localhost:51534}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 48ab9ac1a13e14628ccaf46704d875bb\n*** Element info: {Using\u003did, value\u003dspanMessage2}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.isDisplayed(Unknown Source)\n\tat com.hrms.stepDefinitions.LoginStepDefinitions.verify_the_error_message(LoginStepDefinitions.java:36)\n\tat ✽.verify the error message(file:///Users/aligulsari/eclipse-workspace/CucumberFramwork/src/test/resources/features/Login.feature:14)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "Login with invalid credentials");
formatter.after({
  "status": "passed"
});
});