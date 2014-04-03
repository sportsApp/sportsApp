'use strict';

angular.module('sportsAppApp')
  .controller('MainCtrl', function ($scope, $http) {

    var apiKey = '3npcsdtfa9majpf6zr7a7dtz',
        espnURL = 'http://api.espn.com/v1/sports/news/headlines/top';

    $http({
      method: 'JSONP',
      url: espnURL + '?apiKey=' + apiKey + '&callback=JSON_CALLBACK'
    }).success(function(data) {
      $scope.headlines = data.headlines;
      console.log($scope.headlines);
    });
  });
