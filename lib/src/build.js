/* global Backbone */

var Mast = (function(global, undefined) {
  'use strict';

  var Mast = {},
      raise = require('./raise');

  // Public Mast API.
  Mast.Region = require('./region');
  Mast.View = require('./view');
  Mast.Model = Backbone.Model;
  Mast.Collection = Backbone.Collection;

  // Assign `Mast.start` and start up Mast.
  Mast.start = raise;
  Mast.start(Mast);

  return global.Mast = Mast;
})(window);
