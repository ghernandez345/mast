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
