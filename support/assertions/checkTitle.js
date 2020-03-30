import assert from "assert";

/**
 * Checks page title
 * 
 * @param {String} title - title to be equal to
 */
export default title => {
  assert(
    browser.getTitle() === title,
    `Title ${browser.getTitle()} is not equal to ${title}`
  );
};