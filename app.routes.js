(function() {
  'use strict'

  angular
    .module('Homme')
    .config(appRoutes);

  appRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];


  function appRoutes($stateProvider, $urlRouterProvider) {
    // $log.info("Routers initialized");

    $stateProvider
      .state('Homme', {
        url: '/',
        templateUrl: "/home.html"
      })
      .state('project1', {
        url: '/project1',
        templateUrl: '/resources/project1/template.html'
      })
      .state('project2', {
        url: '/project2',
        templateUrl: '/resources/project2/template.html'
      })

    $urlRouterProvider.otherwise('/');
  }



})();
