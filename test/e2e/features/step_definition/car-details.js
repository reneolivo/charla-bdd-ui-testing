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

  this.Then(/^I should see the details for the car with the id (\d+)$/, function (id, callback) {
    var match = new RegExp(`#/cars/${id}`)
    this.expect(browser.getCurrentUrl())
      .to.eventually.match(match)
      .and.notify(callback);
  });

  this.Then(/^car (\d+) should display the following fields:$/, function (id, table, callback) {
    var self = this;
    var car = this.carsData.filter(function(c) { return c.id == id; })[ 0 ];
    var fields = table.raw();
    var fieldsExpectations = {
      'a gallery of pictures': function() {
        self.expect(element.all(by.css('.gallery img')).count())
          .to.eventually.equal(car.images.length,
            'Gallery images should equal: ' + car.images.length);
      },

      'a name': function() {
        self.expect(element(by.css('h2')).getText())
          .to.eventually.equal(car.name,
            'Car name should equal: ' + car.name);
      },

      'a description': function() {
        self.expect(element(by.css('.description')).getText())
          .to.eventually.equal(car.description,
            'Car description should equal: ' + car.description);
      },

      'an availability identifier': function() {
        var availability = car.available ? 'available' : 'not available';
        self.expect(element(by.css('.availability')).getText())
          .to.eventually.equal(availability,
            'Car availability should equal: ' + availability);
      },

      'and a price': function() {
        self.expect(element(by.css('.price')).getText())
          .to.eventually.equal(car.price,
            'Car price should equal: ' + car.price);
      }
    };

    this.expect(typeof car)
      .not.to.equal('undefined', 'Car **'+id+'** cannot be undefined');

    for(var row in fields) {
      var fieldKey = fields[ row ][ 0 ];
      var expectation = fieldsExpectations[ fieldKey ];
      expectation();
    }
    browser.sleep(200).then(callback);
  });


};
