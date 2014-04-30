(function(window,angular){

  angular.module('sportsApp')
  .directive('logo', function (espnSports, SPORT_ICONS, DEFAULT_ICONS) {
    var $scope = null;

    function get_image(scope){
      return "/foo"
      var image_name = $scope.sportAbbr || $scope.sportName || $scope.sportId;
      var image = SPORT_ICONS[image_name];
      if(!image){
        image = random_image();
      }
      return image;
    }

    function random_image(){
      return DEFAULT_ICONS[Math.floor(Math.random() * DEFAULT_ICONS.length)];
    }

    return {
      restrict: 'E',
      replace: 'true',
      controller: function($scope) {
         this.src = function(){ return get_image($scope) };
      },
      scope: {
          sportId: '@',
        sportName: '@',
        sportAbbr: '@',
          'class': '@'
      },
      template: '<img ng-src="{{ src() }}" alt="{{sportName}}" class="sports-logo {{class}}">'
    };
  });

})(window,window.angular);
