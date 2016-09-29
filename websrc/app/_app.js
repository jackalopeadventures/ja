angular.module("app", ["home","nav","about",'ja-header','ja-footer','packages','contact','blog','ngSanitize', 'ngCookies'])
.run(run);
angular.module("templates", []);


run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            console.log(next+"NEXT<CURRENCT"+current);
            console.log($location.path());
            var restrictedPage = $.inArray($location.path(), ['/login', '/register','/home','/about','/blog','/contact','/']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/');
            }
        });
    }
