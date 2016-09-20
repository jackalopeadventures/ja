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
      template:'<div class="col-med-12 col-lg-6 main_img_container"><img src=/img/not_all_who_wander.jpg style=width:80%;></div><div class="col-sm-12 col-lg-6 main_content"><p class=home-blurb>Whether it\'s a Dawn Patrol hike up to watch the sunrise over the Wasatch before skiing the Greatest Snow on Earth in the winter or a bike shuttle on the legendary Crest trail in the summer we have you covered.<br>Our experienced, friendly, and enthusiastic guides will show you some of the most beautiful landscapes the Wasatch has to offer. We believe earning your turns gives you the most satisfaction and can get you places a chairlift never could. We will also be offering multi day adventures, seminars, corporate retreats and team building, womens and kids clinics, and much more!<br><a ui-sref=about>Click hereto discover our winter packages.</a></p></div>',
      transclude: true,
      scope: {},
      controllerAs: 'vm',
      controller: homeController
    }
})
