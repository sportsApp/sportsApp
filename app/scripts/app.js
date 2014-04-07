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
      .when('/category/:categoryId', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).
  run(function(espnBase){
    espnBase.setAPIKey('3npcsdtfa9majpf6zr7a7dtz');
  });
