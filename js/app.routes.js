(function() {
  'use strict'

  angular
    .module('Homme')
    .config(appRoutes);

  appRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];


  function appRoutes($stateProvider, $urlRouterProvider) {
    // $log.info("Routers initialized");

    $stateProvider
      .state('homme', {
        url: '/',
        templateUrl: "/js/app/templates/home.html"
      })
      .state('work', {
        url: '/work',
        templateUrl: "/js/app/templates/work.html",
        controller: "WorkController",
        controllerAs: "vm"
      })
      .state('work.uno', {
        url: '/uno',
        templateUrl: '/js/app/templates/uno.html'
      })
      .state('work.dos', {
        url: '/dos',
        templateUrl: '/js/app/templates/dos.html'
      })
      .state('work.tres', {
        url: '/tres',
        templateUrl: '/js/app/templates/tres.html'
      })
      .state('work.quattro', {
        url: '/quattro',
        templateUrl: '/js/app/templates/quattro.html'
      })


    $urlRouterProvider.otherwise('/');
  }



})();
