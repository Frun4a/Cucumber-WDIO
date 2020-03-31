import { Then } from "cucumber";
//import { Eyes } from "@applitools/eyes-webdriverio/src/Eyes";

Then("they are successfully logged in", () => {

  try {
    browser.call(() => eyes.open(browser));
    browser.call(() => eyes.check("Login page", Target.window().fully()));
    browser.call(() => eyes.close(false));

  } catch(e) {
    console.log(e);
  } finally {
    browser.call(() => eyes.abortIfNotClosed());
  }

});