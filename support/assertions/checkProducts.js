import catalog from "../../pages/Catalog";
import assert from "assert";

/**
 * Checks for products
 * 
 * @param {boolean} - if true, products should be present
 */
export default toBeFound => {
  const products = catalog.products;

  if (toBeFound) {
    assert(products.length > 0, "No products were found");
  } else {
    assert(products.length === 0, "Products were found");
  }
};