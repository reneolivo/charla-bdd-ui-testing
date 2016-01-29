module.exports = function() {
  this.Before(function(scenario, callback) {
      callback();
  });

  this.After(function(scenario, callback) {
    callback();
	});

  this.registerHandler('AfterFeatures', function (event, callback) {
    browser.quit().then(callback);
  });
};
