angular.module("ja-header")
.directive('jaHeader', function(){
    return {
      restrict: 'E',
      templateUrl: 'header.html',
      transclude: true,
      scope: {},
      controllerAs: 'vm',
      controller: headerController

    }
})
