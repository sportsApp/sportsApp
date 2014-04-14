'use strict';

angular.module('sportsApp')
  .controller('TeamCtrl', ['$scope', 'espnSports', 'espnTeam', '$routeParams', '$log', function ($scope, sports, team, $routeParams, $log) {
    $scope.sportType = $routeParams.sportType;
    $scope.league = $routeParams.league;
    $scope.teamId = $routeParams.teamId;

    team.get({sportType: $scope.sportType, league: $scope.league,  teamId:  $scope.teamId }).$promise.then(function(data) {
       $scope.data = data;
    });
  }]);
