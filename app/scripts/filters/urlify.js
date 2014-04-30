(function(window, angular){
angular.module('sportsApp').
  filter('urlify', function() {
    return function(input) {
      return angular.lowercase(input).replace(/ +/g, '-').replace(/[^a-z0-9\-]+/g, '');
    };
  });
})(window, window.angular);
