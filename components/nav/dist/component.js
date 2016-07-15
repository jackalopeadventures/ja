
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
      template:'<div class=navbar><div class=navbar-inner><ul class=nav><li><a ui-sref=home>Home</a></li><li><a ui-sref=about>About</a></li><li><a ui-sref=swap>Gear Swap</a></li></ul></div></div>',
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
                       url: "about",
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
