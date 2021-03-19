window.demoDescription = "Demo in getting started guide.";
Pts.namespace( window );

(function() {

  /**
   * Option 4: Advanced mode to initiate space and form, allowing for more options
   */
  var space = new CanvasSpace("#pt").setup({ bgcolor: "#99eeff", retina: true, resize: true });
  var form = space.getForm();
  space.add( {
    start: (bound) => {},

    animate: (time, ftime) => {
      form.point( space.pointer, 10 );
    },

    action: (type, x, y) => {}
  });

  space.bindMouse().bindTouch().play();

})();
