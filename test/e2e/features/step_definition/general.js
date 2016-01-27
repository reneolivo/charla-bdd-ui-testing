module.exports = function() {
  function accessUrl(url, cb) {
    browser.loadAndWaitForAureliaPage('http://localhost:9000/#' + url);
    browser.waitForRouterComplete();
    cb();
  }

  this.Given(/^I access "([^"]*)"$/, accessUrl);
  this.Given(/^I access the "([^"]*)" page$/, accessUrl);


  this.Then(/^the page title should be "([^"]*)"$/, function (title, callback) {
    this.expect(browser.getTitle())
      .to.eventually.equal(title)
      .and.notify(callback);
  });

};
