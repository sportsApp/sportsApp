(function(window, angular, undefined) {'use strict';
  function transformTeam(data) {
    var team =  data.sports[0].leagues[0].teams[0];
    return {
      name: team.name,
      color: team.color,
      links: team.links
    }
  }

  angular.module('espnAPI').
  service('espnTeam', ['$resource', 'espnBase', '$log', function ($resource, espnBase, $log){

    var   url = espnBase.url() + 'sports/:sportType/:league/teams/:teamId',
    options = angular.extend({}, espnBase.options());

    return $resource(url, options, {
      get: angular.extend({
        url: url,
        transformResponse:transformTeam
      }, espnBase.options())
    });
  }]);
})(window, window.angular);
