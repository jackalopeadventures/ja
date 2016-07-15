angular.module("activityMenu", [])
.directive('activityMenu', function(){
    return {
      rescrict: 'E',
      templateUrl: 'activityMenu.html',
      scope: {},
      controllerAs: 'ctrl',
      controller: function(){
        this.test = "Hey guys!  "
      }
    }
})
