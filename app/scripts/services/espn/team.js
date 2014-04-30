(function(window, angular, undefined) {'use strict';
  function transformTeam(data) {
    return data.sports[0].leagues[0].teams[0];
  }

  angular.module('espnAPI').
  service('espnTeam', ['$resource', 'espnBase', '$log', function ($resource, espnBase, $log){

    var   url = espnBase.url() + 'sports/:sportType/:league/teams/:teamId',
    options = angular.extend({}, espnBase.options());
    return $resource(url, options, {
      get: angular.extend({ transformResponse: transformTeam}, options)
    });
  }]);
})(window, window.angular);
