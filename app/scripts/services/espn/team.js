(function(window, angular, undefined) {'use strict';
angular.module('espnAPI').
  service('espnTeam', ['$resource', 'espnBase', '$routeParams', function ($resource, espnBase, $routeParams){

    var   url = espnBase.url() + 'sports/' + $routeParams.sportType +'/'+ $routeParams.league+'/teams/'+ $routeParams.teamId,
      options = angular.extend({}, espnBase.options());

    return $resource(url, options, {
          get: {method: 'JSONP', url: url}

    });
  }]);
})(window, window.angular);
