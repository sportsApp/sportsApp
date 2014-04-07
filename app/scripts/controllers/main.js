'use strict';

angular.module('sportsApp')
  .controller('MainCtrl', ['$scope', 'espnSports', '$log', function ($scope, sports, $log) {
    sports.get().$promise.then(function(data) {
      $scope.headlines = data;
      $log.info($scope.headlines);
    });
  }]);
