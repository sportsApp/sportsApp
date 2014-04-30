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
      .when('/sports/:sportType/:league/teams/:teamId', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).
  run(function(espnBase){
    espnBase.setAPIKey('3npcsdtfa9majpf6zr7a7dtz');
  }).
  run(function($rootScope){
    $rootScope.navStyle = [];
    $rootScope.settings = angular.fromJson(localStorage.getItem('sportsApp.settings')||'{}');
    $rootScope.$watch('settings',function(oldVal, newVal){
      localStorage.setItem('sportsApp.settings', angular.toJson(newVal, false));
    });
    $rootScope.$digest();
  }).
  constant('SPORT_ICONS', {
    'football': '/images/football.png'
  }).
  constant('DEFAULT_ICONS', [
    '/images/medal.png',
    '/images/track.png'
  ]).
  controller('AppCrtl', ['$scope', '$timeout', function($scope, $timeout){
    $scope.openNav = function() {
      $timeout(function(){ $scope.navStyle = ['st-effect-12', 'st-menu-open']; }, 100);
    };
  }]);
