(function() {
  "use strict"

  angular
    .module("Homme")
    .controller("FxController", FxController);

  FxController.$inject = ["$log", "$rootScope"];

  function FxController($log, $rootScope) {
    $log.debug("Graphic FX operational.");
    var vm = this;

    $rootScope.$on("$viewContentLoaded", function(event, toState) {
    if (document.querySelectorAll('svg').length === 0) {
      var elem = document.getElementById('draw-test');
      var params = { width: 285, height: 200 };
      var two = new Two(params).appendTo(elem);

      var circle = two.makeCircle(-70, 0, 50);
      var rect = two.makeRectangle(70, 0, 100, 100);
      circle.fill = '#FF8000';
      rect.fill = 'rgb(0, 200, 255)';

      var group = two.makeGroup(circle, rect);
      group.translation.set(two.width / 2, two.height / 2);
      group.scale = 0;
      group.noStroke();

      two.bind('update', function(frameCount) {
        // This code is called everytime two.update() is called.
        // Effectively 60 times per second.
        if (group.scale > 0.9999) {
          group.scale = group.rotation = 0;
        }
        var t = (1 - group.scale) * 0.125;
        group.scale += t;
        group.rotation += t * 4 * Math.PI;
      }).play();  // Finally, start the animation loop
      if (document.querySelectorAll('svg').length !== 0) {
        two.update();
      }
    }
    })
  }

})();
