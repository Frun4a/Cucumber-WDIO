class Home {
  get url() { return "/" }
  get searchField() { return $("#search_query_top") }
  get searchButton() { return $("button.btn.btn-default.button-search") }

  get womenMenuOption() {  return $('#block_top_menu > ul.menu-content > li > a[title="Women"]') }
  get dressesMenuOption() {  return $('#block_top_menu > ul.menu-content > li > a[title="Dresses"]') }
  get tshirtsMenuOption() {  return $('#block_top_menu > ul.menu-content > li > a[title="T-shirts"]') }

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

  /**
   * Clicks menu option
   * 
   * @param {String} option - Name of the menu option to click (e.g. Dresses, Women, T-Shirts) 
   */
  selectMenuOption(option) {
    switch(option) {
      case "Women":
        this.womenMenuOption.click();
        break;
      case "Dresses":
        this.dressesMenuOption.click();
        break;
      case "T-Shirts":
        this.tshirtsMenuOption.click();
        break;
      default:
        console.log(`Invalid option ${option}`);
    }
  }
}

module.exports = new Home();