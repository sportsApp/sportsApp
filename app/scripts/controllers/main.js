'use strict';

angular.module('sportsApp')
  .controller('MainCtrl', ['$scope', 'espnAPI', 'espnSports', '$routeParams','$log', function ($scope, espnAPI, sports, $routeParams, $log) {
    espnAPI.topHeadlines().success(function(data) {
      $scope.headlines = data.headlines;
    });

    // espnAPI.categories().success(function(data) {
    //   $scope.categories = data.sports.slice(0, 5);
    // });

    // $log.info(sports.get());

    sports.get().$promise.then(function(data) {

      $scope.sports = data.sports;
      $log.info($scope.sports);
    });
  }]);
