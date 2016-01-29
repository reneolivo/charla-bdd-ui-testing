module.exports = function() {
  this.Then(/^I should be able to see the car "([^"]*)"$/, function (carName, callback) {
    this.expect(element(by.id('car-1-name')).getText())
      .to.eventually.equal(carName)
      .and.notify(callback);
  });

}
