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
        templateUrl: "/home.html"
      })
      .state('projects', {
        url: '/work',
        templateUrl: "/templates/work.html"
      })
      .state('projects.uno', {
        url: '/uno',
        templateUrl: '/templates/uno.html'
      })
      .state('projects.dos', {
        url: '/dos',
        templateUrl: '/templates/dos.html'
      })

    $urlRouterProvider.otherwise('/');
  }



})();
