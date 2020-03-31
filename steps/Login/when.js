import { When } from "cucumber";
import signin from "../../support/actions/signin";

When(/^the user tries to use "valid" credentials, "(.*)" to log in$/, email => {
  signin(email);
});