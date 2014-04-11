(function(window, angular, undefined) {'use strict';
angular.module('espnAPI').
  service('espnTeam', ['$resource', 'espnBase', function ($resource, espnBase){

    var   url = espnBase.url() + 'sports/football/nfl/teams/26/',
      options = angular.extend({}, espnBase.options());

    return $resource(url, options, {
          get: {method: 'JSONP', url: url}

    });
  }]);
})(window, window.angular);


