module.exports = function() {
  this.Given(/^I access "([^"]*)"$/, function(url, cb) {
    browser
      .loadAndWaitForAureliaPage('http://localhost:9000/#' + url)
      .then(function() {
        return browser.waitForRouterComplete();
      })
      .then(function() {
        cb();
      });
  });

  this.Then(/^the title page title should be "([^"]*)"$/, function (title, callback) {
    this.expect(browser.getTitle())
      .to.eventually.equal(title)
      .and.notify(callback);
  });

};
