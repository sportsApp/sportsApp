'use strict';

angular.module('sportsApp')
  .controller('CategoryCtrl', function ($scope, espnAPI, $routeParams) {
    $scope.categoryId = $routeParams.categoryId;

    espnAPI.categoryHeadlines($routeParams.categoryId).success(function(data) {
      $scope.headlines = data.headlines;
    });
  });
