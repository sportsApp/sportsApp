(function(window, angular, undefined) {'use strict';
angular.module('espnAPI').
  service('espnNow', ['$resource', 'espnBase', function ($resource, espnBase){
    var     url = espnBase.url() + 'now',
        options = angular.extend({}, espnBase.options());

    return $resource(url, options, {
          get: {method: 'JSONP', url: url + '/'},
          top: {method: 'JSONP', url: url + '/top'},
      popular: {method: 'JSONP', url: url + '/popular'},
    });
  }]);
})(window, window.angular);