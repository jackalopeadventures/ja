(function () {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['$location', 'AuthenticationService' ];
    function loginController($location, AuthenticationService) {
        var vm = this;
        console.log('login controller');
        vm.login = login;

        (function initController() {
            // reset login status
            AuthenticationService.ClearCredentials();
        })();

        function login() {
            vm.dataLoading = true;
            AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/');
                } else {
                    console.log(response.message);
                    vm.dataLoading = false;
                }
            });
        };
    }

})();
