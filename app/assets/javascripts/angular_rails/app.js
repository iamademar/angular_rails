( function() {
  'use strict';

  angular.module('angular_rails', [
    // Libraries
    'templates',
    'ngRoute' 
  ])
  .config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'angular_rails/landing.html'
        });
    }
  ]);
})();