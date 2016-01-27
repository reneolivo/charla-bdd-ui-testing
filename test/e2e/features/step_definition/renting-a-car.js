module.exports = function() {
  this.When(/^I click on reserve a car$/, function (callback) {
    callback.pending();
  });

  this.Then(/^I should be taken to the car reservation page$/, function (callback) {
    callback.pending();
  });

  this.Given(/^car (\d+) is not available$/, function (arg1, callback) {
    callback.pending();
  });

  this.Then(/^I should see a warning telling me that the car is not available$/, function (callback) {
    callback.pending();
  });

  this.Given(/^I try to rent car (\d+)$/, function (arg1, callback) {
    callback.pending();
  });

  this.When(/^I set the pickup date to tomorrow$/, function (callback) {
    callback.pending();
  });

  this.When(/^I set the dropoff date to (\d+) days from now$/, function (arg1, callback) {
    callback.pending();
  });

  this.When(/^I submit my rent request$/, function (callback) {
    callback.pending();
  });

  this.Then(/^I should see a success message$/, function (callback) {
    callback.pending();
  });

};
