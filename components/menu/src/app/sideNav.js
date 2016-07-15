angular.module("sideNav")
.directive('sideNav', function(){
    return {
      rescrict: 'E',
      templateUrl: 'sideNav.html',
      transclude: true,
      controllerAs: 'ctrl',
      controller: function(){
        this.test = "ole!!!"
      }
    }
})
