import { Then } from "cucumber";
import verifyLinksContain from "../../support/assertions/verifyLinksContain";

Then(/^Links related to "(.*)" are shown on the results page$/, keyword => {
  verifyLinksContain(keyword);
}); 