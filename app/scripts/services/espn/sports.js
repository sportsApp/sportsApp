(function(window, angular, undefined) {'use strict';
  angular.module('espnAPI').
    service('espnSports', function($resource, espnBase, $log) {
      // $log.info(angular.module('espnAPI'));
      var   url = espnBase.url() + 'sports',
        options = angular.extend({}, espnBase.options());

      return $resource(url, options, {
        get: angular.extend({method: 'JSONP', cache: espnBase.cache() }, espnBase.options())
      });
    });
})(window, window.angular);
