import { Then } from "cucumber";

Then(/^(no )? products are listed$/, notListed => {
  if (notListed) {

  } else {

  }
});
