import { Given } from "cucumber"
import goToPage from "../../support/actions/goToPage"

Given(/^the browser is at the "(Home|Another)" page$/, page => {
  goToPage(page);
});
