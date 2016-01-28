var fs = require('fs');
var path = require('path');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);


module.exports = function() {
  this.World = function World(callback) {
    /* EXPECT FRAMEWORK: */
    this.chai = chai;
    this.expect = chai.expect;

    /* CARS DATA: */
    var carsDataFile;
    var carsDataArray;
    carsDataFile = fs.readFileSync(
      path.resolve(__dirname, '../../../../src/data/cars.js' ),
      'utf8'
    );
    carsDataArray = carsDataFile.match(/(\[[^;]+\]);/)[ 1 ];
    this.carsData = JSON.parse(carsDataArray);

    /* HELPER METHODS: */
    this.expectField = function(fieldElement, fieldText, error) {
      chai.expect(fieldElement.isPresent())
        .to.eventually.equal(true, error);
      chai.expect(fieldElement.getText())
        .to.eventually.equal(fieldText, error);
    }
  };
};
