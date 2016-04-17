(function() {
  'use strict'

  angular
    .module("Momentum")
    .controller("WorkController", WorkController);

  WorkController.$inject("$log", "$state");

  function WorkController($log, $state) {
    $log.debug("Work Controller loaded");
    var vm = this;

  };

})();
