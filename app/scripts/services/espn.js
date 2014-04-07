
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
                          },

    };
  }).
  service('espnAPI', ['$http', function ($http) {
    function callAPI(url, queryParams){
      if(typeof queryParams === 'undefined'){
        queryParams = '';
      }
      return $http({
        method: 'JSONP',
        url: 'http://api.espn.com/v1/'
          +  url
          +  queryParams
          +  '?apiKey=3npcsdtfa9majpf6zr7a7dtz&callback=JSON_CALLBACK'
      });
    };

    return {
      categoryHeadlines:  function(category) {
                          return callAPI('sports/'+category+'/news/');
                        },
            categories: function(){
                          return callAPI('sports');
                        },
          topHeadlines: function(){
                          return callAPI('sports/news/headlines/top');
                        }
    };
  }]);
})(window, window.angular);
