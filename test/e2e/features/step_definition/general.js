module.exports = function() {
  function accessUrl(url, cb) {
    browser
      .loadAndWaitForAureliaPage('http://localhost:9000/#' + url)
      .then(function() {
        //Wait for router or resolve after 1s timeout
        return new Promise(function(resolve) {
          setTimeout(function() { resolve(); }, 1000);
          browser
            .waitForRouterComplete()
            .then(function() { resolve(); });
        });
      })
      .then(function() {
        cb();
      });
  }

  this.Given(/^I access "([^"]*)"$/, accessUrl);
  this.Given(/^I access the "([^"]*)" page$/, accessUrl);


  this.Then(/^the page title should be "([^"]*)"$/, function (title, callback) {
    this.expect(browser.getTitle())
      .to.eventually.equal(title)
      .and.notify(callback);
  });

};
