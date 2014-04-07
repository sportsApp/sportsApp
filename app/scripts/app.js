'use strict';

angular.module('sportsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'espnAPI'
]).
  config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).
  run(function(espnBase){
    espnBase.setAPIKey('3npcsdtfa9majpf6zr7a7dtz');
  });