import home from "../../pages/Home";

export default page => {
  switch(page) {
    case "Home":
      browser.url(home.url);
      break;
      
    default:
      console.log(`Invalid page ${page}`);
  }
};