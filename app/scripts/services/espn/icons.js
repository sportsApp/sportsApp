(function(window, angular){
  'use strict';
  angular.module('espnAPI').
  service('espnIcons', ['espnSports', '$q', function(espnSports, $q){
    return {
      get: function(uid){
        espnSports.get().find(uid);
        return $q;
      }
    };
  }]);
})(window, window.angular);