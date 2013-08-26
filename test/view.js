(function() {

  module('View', {
    setup: function () {
      view = new Mast.View({
        id: 'test-view'
      });
    }
  });

  test('close', function () {
    view.close();
    equal(view.el, undefined, "View should not exist.");
  });

})();
