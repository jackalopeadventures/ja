angular.module("home")
.directive('home', function(){
    return {
      rescrict: 'E',
      templateUrl: 'home.html',
      transclude: true,
      scope: {},
      controllerAs: 'vm',
      controller: function(){
        console.log("SUPER AWESOME SAMPLE") ;
      }
    }
})
