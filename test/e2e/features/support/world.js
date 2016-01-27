var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

module.exports = function() {
  this.World = function World(callback) {
    this.chai = chai;
    this.expect = chai.expect;
  };
};
