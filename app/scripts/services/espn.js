
(function(window, angular, undefined) {'use strict';

angular.module('espnAPI',['ngResource']).
  factory('espnCache', function($cacheFactory) {
   return $cacheFactory('espn-cache');
  }).
  service('espnBase', function(espnCache){
    var options = {
          apiKey: '',
          version: 'v1',
          method: 'JSONP',
          callback: 'JSON_CALLBACK'
        },
        url = 'http://api.espn.com/:version/';

    return {
          cache: function(){
                    return espnCache;
                  },
            url:  function(){
                    return angular.copy(url);
                  },
        options:  function(){
                    return angular.copy(options);
                  },
     setVersion:  function(version){
                    options.version = version;
                    return this;
                  },
      setAPIKey:  function(key) {
                    options.apiKey = key;
                    return this;
                  }
    };
  });
})(window, window.angular);
