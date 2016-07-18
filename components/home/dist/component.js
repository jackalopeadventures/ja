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
