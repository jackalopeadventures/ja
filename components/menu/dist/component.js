angular.module("sideNav", ["templates", "activityMenu"]);

angular.module("sideNav")
.directive('sideNav', function(){
    return {
      rescrict: 'E',
      template:'<ng-transclude></ng-transclude>',
      transclude: true,
      controllerAs: 'ctrl',
      controller: function(){
        this.test = "ole!!!"
      }
    }
})

angular.module("activityMenu", [])
.directive('activityMenu', function(){
    return {
      rescrict: 'E',
      template:'<article class=menu><div class=menu-header><span class=menu-label>Select an Activity!!!</span> <span class=menu-toggle ng-click="ctrl.expanded = !ctrl.expanded">{{ctrl.expanded ? \'-\' : \'+\' }}</span></div><div class=menu-body ng-if=ctrl.expanded><ul><li><span class=menu-item-title>User Tools</span> <a class=menu-item-link href=#>Update Personal Information</a></li><li><span class=menu-item-title>User Tools</span> <a class=menu-item-link href=#>Update Personal Information</a></li><li><span class=menu-item-title>User Tools</span> <a class=menu-item-link href=#>Update Personal Information</a></li></ul></div></article>',
      scope: {},
      controllerAs: 'ctrl',
      controller: function(){
        this.test = "Hey guys!  "
      }
    }
})
