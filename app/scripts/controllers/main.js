'use strict';

angular.module('sportsApp')
  .controller('MainCtrl', function ($scope, espnAPI, $routeParams) {
    espnAPI.topHeadlines().success(function(data) {
      $scope.headlines = data.headlines;
    });
    espnAPI.categories().success(function(data) {
      $scope.categories = data.sports.slice(0, 5);
    });
  });
