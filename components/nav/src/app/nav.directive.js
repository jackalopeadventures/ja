angular.module("nav")
.directive('nav', function(){
    return {
      restrict: 'E',
      templateUrl: 'nav.html',
      transclude: true,
      scope: {},
      controllerAs: 'vm',
      controller: navController

    }
})
