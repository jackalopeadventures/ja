
angular.module("about")
.directive('about', function(){
    return {
      restrict: 'E',
      templateUrl: 'about.html',
      replace: true,
      scope: "=",
      transclude: true




    }
})
