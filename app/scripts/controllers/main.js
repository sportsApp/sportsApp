'use strict';

angular.module('sportsAppApp')
  .controller('MainCtrl', 'espnAPI', function ($scope, $http, $espn) {
    $espn.news().success(function(data) {
      $scope.headlines = data.headlines;
      console.log($scope.headlines);
    });
  });
