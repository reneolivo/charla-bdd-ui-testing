module.exports = function() {
  this.Given(/^a list of cars to rent$/, function (callback) {
    callback.pending();
  });

  this.Then(/^I'm able see the list of cars$/, function (callback) {
    callback.pending();
  });

  this.Then(/^each car should display the following fields:$/, function (table, callback) {
    callback.pending();
  });


};
