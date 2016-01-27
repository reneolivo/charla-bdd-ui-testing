module.exports = function() {
  this.Given(/^a list of cars to rent$/, function (callback) {
    callback();
  });

  this.Then(/^I'm able see the list of cars$/, function (callback) {
    this.expect(element.all(by.css('.car')).count())
      .to.eventually.be.above(0)
      .and.notify(callback);
  });

  this.Then(/^each car should display the following fields:$/, function (table, callback) {
    var fieldsCss = {
      'a picture'                   : by.css('img'),
      'a name'                      : by.css('h3'),
      'a description'               : by.css('.description'),
      'an availability identifier'  : by.css('.availability'),
      'and a price'                 : by.css('.price')
    }

    var car = element(by.css('.car'));
    var fields = table.raw();
    for(var row in fields) {
      var fieldKey = fields[ row ][ 0 ];
      var selector = fieldsCss[ fieldKey ];
      this.expect(car.element(selector).isPresent())
        .to.eventually.be.true;
    }
    browser.sleep(200).then(callback);
  });


};
