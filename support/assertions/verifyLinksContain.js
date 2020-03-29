import assert from "assert";
import searchResultsPage from "../../pages/SearchResults";

/**
 * Ensure that links text includes the keyword
 * 
 * @param {String} keyword - Search keyword
 */
export default (keyword) => {
  searchResultsPage.searchResultsLinks.forEach(element => {
    const linkText = element.getText().toLowerCase();
    if (linkText) {
      assert(linkText.includes(keyword), `Link test does not include ${keyword}`);
    }
  });
};

