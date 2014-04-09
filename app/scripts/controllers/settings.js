'use strict';

angular.module('sportsApp')
  .controller('SettingsCtrl', function ($scope, $http, espnAPI) {
    espnAPI.categories().success(function(data) {
      $scope.categories = data.sports.slice(0, 5);
    });

    $scope.setSport = function() {
      localStorage.setItem('sportsApp.sportType', JSON.stringify($scope.sport.name));
    }

  });
