'use strict';

angular.module('sportsApp')
  .service('espnAPI', function($http){

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
    }

    this.topHeadlines = function(){
      return callAPI('sports/news/headlines/top');
    };

    this.categories = function(){
      return callAPI('sports');
    };

    this.categoryHeadlines = function(category) {
      return callAPI('sports/'+category+'/news/');
    };

  });



