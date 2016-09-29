(function () {
    'use strict';

    angular
        .module('app')
        .controller('registerController', registerController);

    registerController.$inject = ['UserService', '$location', '$rootScope' ];
    function registerController(UserService, $location, $rootScope) {
        var vm = this;

        vm.register = register;

        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                      alert('Registration Successful');
                        //FlashService.Success('Registration successful', true);
                        $location.path('/login');
                    } else {
                      console.log('error');
                        //FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }

})();
