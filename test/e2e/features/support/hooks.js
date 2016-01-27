module.exports = function() {
  this.Before(function(scenario, callback) {
      callback();
  });

  this.After(function(scenario, callback) {
		browser.sleep(200);
    callback();
	});
};
