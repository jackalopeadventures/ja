angular.module('nav').config(
    function($stateProvider, $urlRouterProvider){



             $stateProvider
                .state('home', {
                    url: "home",
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
