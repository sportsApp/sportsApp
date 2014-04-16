'use strict';

angular.module('sportsApp')
  .controller('MainCtrl', ['$scope', 'espnAPI', 'espnSports', 'espnTeam', '$log', function ($scope, espnAPI, sports, team, $log) {

    //default top news headlines
    espnAPI.topHeadlines().success(function(data) {
      $scope.headlines = data.headlines;
    });

    //For list of categories
    sports.get().$promise.then(function(data) {
      $scope.sports = data.sports;
    });

    $scope.selectedIndex = -1;

    $scope.activeLink = function ($index) {
      $scope.selectedIndex = $index;
    };

    $scope.refreshNews = function(event) {
      var activeEl = event.target;
      var sportType = activeEl.getAttribute('data-sport');
      espnAPI.categoryHeadlines(sportType).success(function(data) {
        $scope.headlines = data.headlines;
      });
    }
  }]);
