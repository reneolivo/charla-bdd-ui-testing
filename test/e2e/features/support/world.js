var fs = require('fs');
var path = require('path');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


module.exports = function() {
  this.World = function World(callback) {
    var carsDataFile;
    var carsDataArray;
    this.chai = chai;
    this.expect = chai.expect;

    carsDataFile = fs.readFileSync(
      path.resolve(__dirname, '../../../../src/data/cars.js' ),
      'utf8'
    );

    carsDataArray = carsDataFile.match(/(\[[^;]+\]);/)[ 1 ];

    this.carsData = JSON.parse(carsDataArray);
  };
};
