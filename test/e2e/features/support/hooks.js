module.exports = function() {
  this.Before(function(scenario, callback) {
    /*browser
      .loadAndWaitForAureliaPage('http://localhost:9000/')
      .then(function() {
        //Wait for router or resolve after 1s timeout
        setTimeout(function() { callback(); }, 1000);
        browser
          .waitForRouterComplete()
          .then(function() { callback(); });
      });*/
      callback();
  });

  this.After(function(scenario, callback) {
		/*browser.quit().then(function() {
			callback();
		});*/
    callback();
	});
};
