'use strict';

angular.module('sportsApp')
  .controller('MainCtrl', ['$scope', 'espnSports', '$routeParams','$log', function ($scope, sports, $routeParams, $log) {
    espnAPI.topHeadlines().success(function(data) {
      $scope.headlines = data.headlines;
    });

    espnAPI.categories().success(function(data) {
      $scope.categories = data.sports.slice(0, 5);
    });

    $log.info(sports.get());

    sports.get().$promise.then(function(data) {
      $scope.headlines = data;
      $log.info($scope.headlines);
    });
  }]);
