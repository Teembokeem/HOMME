(function() {
  'use strict'

  angular
    .module("Homme")
    .controller("MainController", MainController);

  MainController.$inject = ["$log", "$state"];

  function MainController($log, $state) {
    $log.debug("MainController loaded.");

    var vm = this;

    vm.$state = $state;
  }

})();
