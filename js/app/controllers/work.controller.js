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

    vm.trasitionimations = trasitionimations;

    function trasitionimations() {
      $log.debug("triggered");

      if ($state.is('work')) {
        return {static: true}
      }
    }

    $rootScope.$on("$viewContentLoaded", function(evt) {
      $log.debug("state change detected", evt)
      $log.debug($state.current.name)
    })

  };

})();
