class Home {
  get url() { return "/" }
  get searchField() { return $("#search_query_top") }
  get searchButton() { return $("button.btn.btn-default.button-search") }

  /**
   * Searches for a keyword
   * 
   * @param {String} keyword - Text to search for 
   */
  search(keyword) {
    this.searchField.waitForDisplayed(5000);
    this.searchField.setValue(keyword);
    this.searchButton.click();
  }
}

module.exports = new Home();