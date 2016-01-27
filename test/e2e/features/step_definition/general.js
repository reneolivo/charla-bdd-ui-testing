module.exports = function() {
  this.Given(/^I access "([^"]*)"$/, function(url, cb) {
    browser
      .loadAndWaitForAureliaPage('http://localhost:9000/#' + url)
      .then(function() {
        //Wait for router or resolve after 200ms timeout
        return new Promise(function(resolve) {
          setTimeout(function() { resolve(); }, 200);
          browser
            .waitForRouterComplete()
            .then(function() { resolve(); });
        });
      })
      .then(function() {
        cb();
      });
  });

this.Then(/^the page title should be "([^"]*)"$/, function (title, callback) {
    this.expect(browser.getTitle())
      .to.eventually.equal(title)
      .and.notify(callback);
  });

};
