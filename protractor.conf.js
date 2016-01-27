// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  //seleniumAddress: 'http://0.0.0.0:4444',
  specs: ['test/e2e/features/*.feature'],

  plugins: [{
    path: 'aurelia.protractor.js'
  }],

  framework: 'custom',
  frameworkPath: 'node_modules/protractor-cucumber-framework',
  cucumberOpts: {
    format: 'pretty',
    require: 'test/e2e/features/',
    tags: [
      '@runThis'
    ]
  }
};
