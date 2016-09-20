
angular.module("packages")
.directive('packages', function(){
    return {
      restrict: 'E',
      templateUrl: 'packages.html',
      transclude: true,
      scope: {},
      controllerAs: 'vm',
      controller:packagesController

    }
})
