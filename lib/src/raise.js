var utils = require('./utils');
var Region = require('./region');

module.exports = function raise() {
  var regions = [];

  // Collect the region difinitions and create region instances for each one.
  var regionDefinitions = utils.collectRegions();
  _.each(regionDefinitions, function (el) {
    var region = new Region(el);
    regions.push(region);
  });

  // With those regions, append the correct View with the appropriate properties.
};
