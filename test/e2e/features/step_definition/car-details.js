module.exports = function() {
  this.When(/^I click on any car$/, function (callback) {
    element(by.id('car-1')).click();
    callback();
  });

  this.Then(/^I should be redirected to that car details page$/, function (callback) {
    this.expect(browser.getCurrentUrl())
      .to.eventually.match(/#\/cars\/1/)
      .and.notify(callback);
  });

  this.Then(/^I should see the details for the car with the id "([^"]*)"$/, function (arg1, callback) {
    callback.pending();
  });

  this.Then(/^the car should display the following fields:$/, function (table, callback) {
    callback.pending();
  });


};
