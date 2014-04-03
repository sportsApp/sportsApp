'use strict';

angular.module('sportsAppApp', [])
	.factory('espnAPI', function($http){

	    function callAPI(url, query_params){
	    	return $http({
	      		method: 'JSONP',
	      		url: 'http://api.espn.com/v1/sports/' +  url + '?apiKey=3npcsdtfa9majpf6zr7a7dtz&callback=JSON_CALLBACK'
	    	});
	    }
	    
	    return {
	    	topHeadlines: function(){
	    		return callAPI('news/headlines/top');
	    	}
	    }
	});