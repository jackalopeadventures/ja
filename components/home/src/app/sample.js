angular.module("home")
.directive('home', function(){
    return {
      restrict: 'E',
      templateUrl: 'home.html',
      transclude: true,
      scope: "="
    }
})
