exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  // return new Promise((resolve, reject) => {
  //   if (page.path === "/") {
  //     // It's assumed that `landingPage.js` exists in the `/layouts/` directory
  //     page.layout = "landing";

  //     // Update the page.
  //     createPage(page);
  //   }

  //   resolve();
  // });


  if (page.path === "/") {
    page.context.layout = "landing"
    createPage(page)
  }
}