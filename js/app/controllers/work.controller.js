(function() {
  'use strict'

  angular
    .module("Homme")
    .controller("WorkController", WorkController);

  WorkController.$inject = ["$log", "$state"];

  function WorkController($log, $state) {
    $log.debug("Work Controller loaded");
    var vm = this;

  };

})();
