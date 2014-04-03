'use strict';

angular.module('sportsApp')
  .controller('MainCtrl', function ($scope, $http, espnAPI) {
    espnAPI.topHeadlines().success(function(data) {
      $scope.headlines = data.headlines;
      console.log($scope.headlines);
    });
  });
