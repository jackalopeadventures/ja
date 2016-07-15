
angular.module("about")
.directive('about', function(){
    return {
      rescrict: 'E',
      templateUrl: 'sample.html',
      transclude: true,
      scope: {},
      controllerAs: 'ctrl',
      controller: function(){
        console.log('about!');
      }

    }
})
