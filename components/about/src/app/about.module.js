
angular.module("about")
.directive('about', function(){
    return {
      restrict: 'E',
      templateUrl: 'about.html',
      transclude: true,
      scope: {}


    }
})
