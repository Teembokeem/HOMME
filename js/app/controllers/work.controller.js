(function() {
  'use strict'

  angular
    .module("Homme")
    .controller("WorkController", WorkController);

  WorkController.$inject = ["$log", "$state", "$rootScope"];

  function WorkController($log, $state, $rootScope) {
    $log.debug("Work Controller loaded");
    var vm = this;
    vm.$state = $state;

    $rootScope.$on("$viewContentLoaded", function(evt) {
      $log.debug("state change detected", evt)
      $log.debug($state.current.name)
    })

  };

})();
