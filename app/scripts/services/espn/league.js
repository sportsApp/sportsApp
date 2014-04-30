angular.module('espnAPI').
service('espnLeague', ['$resource','espnBase', function ($resource, espnBase) {
  var    url = espnBase.url() + 'sports/:sport/:league',
  options = angular.extend({}, espnBase.options());

  return $resource(url, options, {
    get:  angular.extend({ url: url, method: 'JSONP', cache: espnBase.cache() }, espnBase.options())
  });
}]);