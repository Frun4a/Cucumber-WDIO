import {Given} from "cucumber"
import homePage from "../../pages/Home";
import goToUrl from "../../support/actions/goToUrl";

Given('A web browser is at the Google home page', () => {
  goToUrl(homePage.url);
});