
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
                .state('login', {
                    url: "/login",
                    template:'<div class="col-md-6 col-md-offset-3"><h2>Login</h2><form name=form ng-submit=vm.login() role=form><div class=form-group ng-class="{ \'has-error\': form.username.$dirty && form.username.$error.required }"><label for=username>Username</label> <input type=text name=username id=username class=form-control ng-model=vm.username required> <span ng-show="form.username.$dirty && form.username.$error.required" class=help-block>Username is required</span></div><div class=form-group ng-class="{ \'has-error\': form.password.$dirty && form.password.$error.required }"><label for=password>Password</label> <input type=password name=password id=password class=form-control ng-model=vm.password required> <span ng-show="form.password.$dirty && form.password.$error.required" class=help-block>Password is required</span></div><div class=form-actions><button type=submit ng-disabled="form.$invalid || vm.dataLoading" class="btn btn-primary">Login</button> <img ng-if=vm.dataLoading src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="> <a href=#/register class="btn btn-link">Register</a></div></form></div>',
                    controller: 'loginController',
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
                    .state('register', {
                        url: "/register",
                        template:'<div class="col-md-6 col-md-offset-3 content-round-corners"><h2>Register</h2><form name=form ng-submit=vm.register() role=form><div class=form-group ng-class="{ \'has-error\': form.firstName.$dirty && form.firstName.$error.required }"><label for=username>First name</label> <input type=text name=firstName id=firstName class=form-control ng-model=vm.user.firstName required> <span ng-show="form.firstName.$dirty && form.firstName.$error.required" class=help-block>First name is required</span></div><div class=form-group ng-class="{ \'has-error\': form.lastName.$dirty && form.lastName.$error.required }"><label for=username>Last name</label> <input type=text name=lastName id=Text1 class=form-control ng-model=vm.user.lastName required> <span ng-show="form.lastName.$dirty && form.lastName.$error.required" class=help-block>Last name is required</span></div><div class=form-group ng-class="{ \'has-error\': form.username.$dirty && form.username.$error.required }"><label for=username>Username</label> <input type=text name=username id=username class=form-control ng-model=vm.user.username required> <span ng-show="form.username.$dirty && form.username.$error.required" class=help-block>Username is required</span></div><div class=form-group ng-class="{ \'has-error\': form.password.$dirty && form.password.$error.required }"><label for=password>Password</label> <input type=password name=password id=password class=form-control ng-model=vm.user.password required> <span ng-show="form.password.$dirty && form.password.$error.required" class=help-block>Password is required</span></div><div class=form-actions><button type=submit ng-disabled="form.$invalid || vm.dataLoading" class="btn btn-primary">Register</button> <img ng-if=vm.dataLoading src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="> <a href=#/login class="btn btn-link">Cancel</a></div></form></div>',
                        controller: 'registerController',
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
