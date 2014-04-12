'use strict';

angular.module('sportsApp')
  .controller('TeamCtrl', ['$scope', 'espnSports', 'espnTeam', '$routeParams', '$log', function ($scope, sports, team, $routeParams, $log) {

    team.get().$promise.then(function(data) {
       $scope.data = data;
    });

    $scope.sportType = $routeParams.sportType;
    $scope.league = $routeParams.league;
    $scope.teamId = $routeParams.teamId;
  }]);
