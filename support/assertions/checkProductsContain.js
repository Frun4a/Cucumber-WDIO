import catalog from "../../pages/Catalog";
import assert from "assert";

/**
 * Checks that products titles contain the keyword
 * 
 * @param {String} keyword - keyword to search products titles for
 */
export default keyword => {
  const products = catalog.products;

  products.forEach(element => {
    const productText = element.getText().trim().toLowerCase();
    if (productText) {
      assert(
        productText.includes(keyword),
        `Product ${element.getText()} does not contain ${keyword}`
      );
    }
  });
};