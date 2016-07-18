angular.module("ja-footer")
.directive('jaFooter', function(){
    return {
      restrict: 'E',
      templateUrl: 'footer.html',
      transclude: true,
      scope: {},
      controllerAs: 'vm',
      controller: function(){
       console.log('here')
      }

    }
})
