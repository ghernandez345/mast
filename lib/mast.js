;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./raise":2,"./region":3,"./view":5}],2:[function(require,module,exports){
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

},{"./region":3,"./utils":4}],3:[function(require,module,exports){
var Region = function (el) {
  this._initialize(el);
};

_.extend(Region.prototype, Backbone.Events, {

   /**
    * Initalize a region.
    * @param  {DOM El} el [Raw DOM element that will represent the region].
    */
  _initialize: function(el) {
    $el = $(el);
    var view = $(el).attr('data-region');

  }
});

module.exports = Region;

},{}],4:[function(require,module,exports){
module.exports = {
  collectRegions: function() {
    var region = $('[data-region]', $('body'));
    return region;
  }
}

},{}],5:[function(require,module,exports){
var View = Backbone.View;

_.extend(View.prototype, {

  /**
   * Remove this view and remove child views associated with it.
   * Also unbind the event handlers for these views.
   */
  close: function() {
    this._removeChildren();
    this.off();
    this.remove();
  },

  // Array that keeps track of the children associated with this view.
  _children: [],

  /**
   * Iterated through the children views associated with this view and closes them.
   */
  _removeChildren: function() {
    if (this._children.length > 0) {
      _.each(this._children, function(el) {
        el.close();
      });
    }
  }
});

module.exports = View;

},{}]},{},[1])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvZ2hlcm5hbmRlejM0NS9jb2RlL21hc3QvbGliL3NyYy9idWlsZC5qcyIsIi9Vc2Vycy9naGVybmFuZGV6MzQ1L2NvZGUvbWFzdC9saWIvc3JjL3JhaXNlLmpzIiwiL1VzZXJzL2doZXJuYW5kZXozNDUvY29kZS9tYXN0L2xpYi9zcmMvcmVnaW9uLmpzIiwiL1VzZXJzL2doZXJuYW5kZXozNDUvY29kZS9tYXN0L2xpYi9zcmMvdXRpbHMuanMiLCIvVXNlcnMvZ2hlcm5hbmRlejM0NS9jb2RlL21hc3QvbGliL3NyYy92aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbCBCYWNrYm9uZSAqL1xuXG52YXIgTWFzdCA9IChmdW5jdGlvbihnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIE1hc3QgPSB7fSxcbiAgICAgIHJhaXNlID0gcmVxdWlyZSgnLi9yYWlzZScpO1xuXG4gIC8vIFB1YmxpYyBNYXN0IEFQSS5cbiAgTWFzdC5SZWdpb24gPSByZXF1aXJlKCcuL3JlZ2lvbicpO1xuICBNYXN0LlZpZXcgPSByZXF1aXJlKCcuL3ZpZXcnKTtcbiAgTWFzdC5Nb2RlbCA9IEJhY2tib25lLk1vZGVsO1xuICBNYXN0LkNvbGxlY3Rpb24gPSBCYWNrYm9uZS5Db2xsZWN0aW9uO1xuXG4gIC8vIEFzc2lnbiBgTWFzdC5zdGFydGAgYW5kIHN0YXJ0IHVwIE1hc3QuXG4gIE1hc3Quc3RhcnQgPSByYWlzZTtcbiAgTWFzdC5zdGFydChNYXN0KTtcblxuICByZXR1cm4gZ2xvYmFsLk1hc3QgPSBNYXN0O1xufSkod2luZG93KTtcbiIsInZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBSZWdpb24gPSByZXF1aXJlKCcuL3JlZ2lvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJhaXNlKCkge1xuICB2YXIgcmVnaW9ucyA9IFtdO1xuXG4gIC8vIENvbGxlY3QgdGhlIHJlZ2lvbiBkaWZpbml0aW9ucyBhbmQgY3JlYXRlIHJlZ2lvbiBpbnN0YW5jZXMgZm9yIGVhY2ggb25lLlxuICB2YXIgcmVnaW9uRGVmaW5pdGlvbnMgPSB1dGlscy5jb2xsZWN0UmVnaW9ucygpO1xuICBfLmVhY2gocmVnaW9uRGVmaW5pdGlvbnMsIGZ1bmN0aW9uIChlbCkge1xuICAgIHZhciByZWdpb24gPSBuZXcgUmVnaW9uKGVsKTtcbiAgICByZWdpb25zLnB1c2gocmVnaW9uKTtcbiAgfSk7XG5cbiAgLy8gV2l0aCB0aG9zZSByZWdpb25zLCBhcHBlbmQgdGhlIGNvcnJlY3QgVmlldyB3aXRoIHRoZSBhcHByb3ByaWF0ZSBwcm9wZXJ0aWVzLlxufTtcbiIsInZhciBSZWdpb24gPSBmdW5jdGlvbiAoZWwpIHtcbiAgdGhpcy5faW5pdGlhbGl6ZShlbCk7XG59O1xuXG5fLmV4dGVuZChSZWdpb24ucHJvdG90eXBlLCBCYWNrYm9uZS5FdmVudHMsIHtcblxuICAgLyoqXG4gICAgKiBJbml0YWxpemUgYSByZWdpb24uXG4gICAgKiBAcGFyYW0gIHtET00gRWx9IGVsIFtSYXcgRE9NIGVsZW1lbnQgdGhhdCB3aWxsIHJlcHJlc2VudCB0aGUgcmVnaW9uXS5cbiAgICAqL1xuICBfaW5pdGlhbGl6ZTogZnVuY3Rpb24oZWwpIHtcbiAgICAkZWwgPSAkKGVsKTtcbiAgICB2YXIgdmlldyA9ICQoZWwpLmF0dHIoJ2RhdGEtcmVnaW9uJyk7XG5cbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVnaW9uO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbGxlY3RSZWdpb25zOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVnaW9uID0gJCgnW2RhdGEtcmVnaW9uXScsICQoJ2JvZHknKSk7XG4gICAgcmV0dXJuIHJlZ2lvbjtcbiAgfVxufVxuIiwidmFyIFZpZXcgPSBCYWNrYm9uZS5WaWV3O1xuXG5fLmV4dGVuZChWaWV3LnByb3RvdHlwZSwge1xuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhpcyB2aWV3IGFuZCByZW1vdmUgY2hpbGQgdmlld3MgYXNzb2NpYXRlZCB3aXRoIGl0LlxuICAgKiBBbHNvIHVuYmluZCB0aGUgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZXNlIHZpZXdzLlxuICAgKi9cbiAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKCk7XG4gICAgdGhpcy5vZmYoKTtcbiAgICB0aGlzLnJlbW92ZSgpO1xuICB9LFxuXG4gIC8vIEFycmF5IHRoYXQga2VlcHMgdHJhY2sgb2YgdGhlIGNoaWxkcmVuIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHZpZXcuXG4gIF9jaGlsZHJlbjogW10sXG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVkIHRocm91Z2ggdGhlIGNoaWxkcmVuIHZpZXdzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHZpZXcgYW5kIGNsb3NlcyB0aGVtLlxuICAgKi9cbiAgX3JlbW92ZUNoaWxkcmVuOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgXy5lYWNoKHRoaXMuX2NoaWxkcmVuLCBmdW5jdGlvbihlbCkge1xuICAgICAgICBlbC5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuIl19
;