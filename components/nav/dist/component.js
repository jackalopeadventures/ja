
angular.module("nav", ["ui.router"]);

  // angular.module('ja-header').controller('headerController', [ headerController]);
  //
  //   function headerController() {
  //       var vm = this;
  //   };



  angular.module('nav').controller('navController', [ navController,'ui.router']);

    function navController() {
        var vm = this;

        console.log('nav loading');
    };

angular.module("nav")
.directive('nav', function(){
    return {
      restrict: 'E',
      template:'<div class=navbar><div class=navbar-inner><ul class=nav><li><a ui-sref=home>HOME</a></li><li><a ui-sref=about>ABOUT</a></li><li><a ui-sref=blog>BLOG</a></li><li><a ui-sref=packages>PACKAGES</a></li><li><a ui-sref=contact>CONTACT</a></li></ul></div></div>',
      transclude: true,
      scope: {},
      controllerAs: 'vm',
      controller: navController

    }
})

angular.module('nav').config(
    function($stateProvider, $urlRouterProvider) {



        $stateProvider
            .state('home', {
                url: "/",
                template: "<home></home>",
                controller: 'homeController',
                controllerAs: 'vm',
                resolve:{
                  blogs:  function(Blog) {

                      return Blog.getLatest();
                  }
                }

            })
        $stateProvider
            .state('about', {
                url: "/about",
                template: "<about></about>",
                controller: 'aboutController',
                controllerAs: 'vm'
                //
                // resolve:{
                //     myEnrollments:/
                //*@ngInject*/  function(Content) {
                //
                //         return Content.getEnrollments({
                //             id: 51883
                //         });
                //     }
                //}

            })
        $stateProvider
            .state('contact', {
                url: "/contact",
                template: "<contact></contact>",
                controller: 'contactController',
                controllerAs: 'vm'

            })

        $stateProvider
            .state('packages', {
                url: "/packages",
                template: "<packages></packages>",
                controller: 'packagesController',
                controllerAs: 'vm',
                //
                // resolve:{
                //     myEnrollments:/
                //*@ngInject*/  function(Content) {
                //
                //         return Content.getEnrollments({
                //             id: 51883
                //         });
                //     }
                //}

            })
            $stateProvider
                .state('blog', {
                    url: "/blog",
                    template: "<blog></blog>",
                    controller: 'blogController',
                    controllerAs: 'vm',
                    resolve:{
                        blogs:  function(Blog) {

                            return Blog.getLatest();
                        }
                    }

                })
        $urlRouterProvider.otherwise("/");



    }

);
