angular.module('espnAPI').
  service('espnNow', ['$resource', 'espnBase', function ($resource, espnBase){
    var   url = espnBase.url() + 'now',
      options = angular.extend({}, espnBase.options());

    return $resource(url, options);
  }]);
