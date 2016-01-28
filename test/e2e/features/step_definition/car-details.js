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
        var h2 = element(by.css('h2'));
        var error = 'Car name should equal: ' + car.name;

        self.expectField(h2, car.name, error);
      },

      'a description': function() {
        var description = element(by.css('.description'));
        var error = 'Car description should equal: ' + car.description;

        self.expectField(description, car.description, error);
      },

      'an availability identifier': function() {
        var availability = element(by.css('.availability'));
        var availabilityText = car.available ? 'available' : 'not available';
        var error = 'Car availability should equal: ' + availabilityText;

        self.expectField(availability, availabilityText, error);
      },

      'and a price': function() {
        var price = element(by.css('.price'));
        var error = 'Car price should equal: ' + car.price;

        self.expectField(price, car.price + '', error);
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
