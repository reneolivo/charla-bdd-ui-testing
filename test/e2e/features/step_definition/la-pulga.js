module.exports = function() {
  this.Given(/^I navigate to "([^"]*)"$/, function (url, callback) {
    browser.get(url);
    callback();
  });

  this.When(/^I search for "([^"]*)"$/, function (query, callback) {
    element(by.id('q')).sendKeys(query);
    callback();
  });

  this.When(/^click on "([^"]*)"$/, function (elementId, callback) {
    element(by.id(elementId)).click();
    callback();
  });

  this.Then(/^I should be able to see a list of shoes$/, { timeout: 10 * 1000 }, function (callback) {
    var records = element.all(by.css('.listaslnk tbody tr'));
    this.expect(records.count())
      .to.eventually.be.above(0)
      .and.notify(callback);
  });

}
