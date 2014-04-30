(function(window, angular, undefined) {'use strict';
  angular.module('espnAPI').
  service('espnSport', ['$resource', 'espnBase', function($resource, espnBase) {
    var   url = espnBase.url() + 'sports/:sport',
    options = angular.extend({}, espnBase.options());

    return $resource(url, options, {
      get:  angular.extend({url: url, method: 'JSONP'}, espnBase.options())
    });
  }]);
})(window, window.angular);
