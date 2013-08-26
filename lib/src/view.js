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
