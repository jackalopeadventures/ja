angular.module('nav').config(
    function($stateProvider, $urlRouterProvider) {



        $stateProvider
            .state('home', {
                url: "/",
                template: "<home></home>",
                controller: 'homeController',
                controllerAs: 'vm'

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
