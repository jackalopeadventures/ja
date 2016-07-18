angular.module("sample", []);

angular.module("sample")
.directive('sample', function(){
    return {
      rescrict: 'E',
      template:'<span ng-bind=ctrl.msg></span>',
      transclude: true,
      scope: {},
      controllerAs: 'ctrl',
      controller: function(){
        this.msg = "SUPER AWESOME SAMPLE";
      },
      link: function(scope, element, attr){
        function randomColor(){
          var colors = []
          for(var i = 0; i < 3; i++){
            colors[i] = Math.floor((Math.random() * 256) + 1);
          }
          return colors;
        }

        element.bind("click", function(){
          element.css('background-color', "rgb("+ randomColor() +")");
          element.css('color', "rgb("+ randomColor() +")");
        })
      }
    }
})

angular.module("about", []);

angular.module('about').controller('aboutController', [ aboutController]);

  function aboutController() {
      var vm = this;
      console.log('about');
  };


angular.module("about")
.directive('about', function(){
    return {
      rescrict: 'E',
      template:'<div class=about><h1>About</h1></div>',
      transclude: true,
      scope: {},
      controllerAs: 'ctrl',
      controller: function(){
        console.log('about!');
      }

    }
})

angular.module("home", []);

  angular.module('home').controller('homeController', [ homeController]);

    function homeController() {
        var vm = this;
        console.log('home');
    };

angular.module("home")
.directive('home', function(){
    return {
      rescrict: 'E',
      template:'<div class="col-med-12 col-lg-6 home_content"><img src=/img/not_all_who_wander.jpg style=width:80%;></div><div class="col-med-12 col-lg-6 home_content"><img src=/img/close_up.jpg style=width:80%;></div>',
      transclude: true,
      scope: {},
      controllerAs: 'vm',
      controller: homeController
    }
})

angular.module("ja-footer", []);

angular.module("ja-footer")
.directive('jaFooter', function(){
    return {
      restrict: 'E',
      template:'<div><ul class=juicer-feed data-feed-id=jackalope data-filter=Instagram></ul></div>',
      transclude: true,
      scope: {},
      controllerAs: 'vm',
      controller: function(){
       console.log('here')
      }

    }
})

angular.module("ja-header", []);

  angular.module('ja-header').controller('headerController', [ headerController]);

    function headerController() {
        var vm = this;
    };

angular.module("ja-header")
.directive('jaHeader', function(){
    return {
      restrict: 'E',
      template:'<div class=header><img src=/img/logo-wide.png class=logo></div>',
      transclude: true,
      scope: {},
      controllerAs: 'vm',
      controller: headerController

    }
})

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


angular.module("nav", ["ui.router"]);

  angular.module('ja-header').controller('headerController', [ headerController]);

    function headerController() {
        var vm = this;
    };



  angular.module('nav').controller('navController', [ navController,'ui.router']);

    function navController() {
        var vm = this;

        console.log('nav loading');
    };

angular.module("nav")
.directive('nav', function(){
    return {
      restrict: 'E',
      template:'<div class=navbar><div class=navbar-inner><ul class=nav><li><a ui-sref=home>HOME</a></li><li><a ui-sref=about>ABOUT</a></li><li><a ui-sref=swap>GEAR SWAP</a></li></ul></div></div>',
      transclude: true,
      scope: {},
      controllerAs: 'vm',
      controller: navController

    }
})



angular.module('nav').config(
    function($stateProvider, $urlRouterProvider){



             $stateProvider
                .state('home', {
                    url: "/",
                    template: "<home></home>",
                    controller:'homeController',
                    controllerAs:'vm'
                    //
                    // resolve:{
                    //     myEnrollments:/*@ngInject*/  function(Content) {
                    //
                    //         return Content.getEnrollments({
                    //             id: 51883
                    //         });
                    //     }
                   //}
                })
                $stateProvider
                   .state('about', {
                       url: "/about",
                       template: "<about></about>",
                       controller:'aboutController',
                       controllerAs:'vm'
                       //
                       // resolve:{
                       //     myEnrollments:/*@ngInject*/  function(Content) {
                       //
                       //         return Content.getEnrollments({
                       //             id: 51883
                       //         });
                       //     }
                      //}
                   })


                $urlRouterProvider.otherwise("/");



    }

);
