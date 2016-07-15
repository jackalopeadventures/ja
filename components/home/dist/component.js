angular.module("home", []);

  angular.module('home').controller('homeController', [ homeController]);

    function homeController() {
        var vm = this;
    };

angular.module("home")
.directive('home', function(){
    return {
      rescrict: 'E',
      template:'<div class=home><h3 class=home_header>Welcome to Jackalope Adventures</h3><p>Whether it\'s a Dawn Patrol hike up to watch the sunrise over the Wasatch before skiing the Greatest Snow on Earth in the winter or a bike shuttle on the legendary Crest trail in the summer we have you covered.<br>Our experienced, friendly, and enthusiastic guides will show you some of the most beautiful landscapes the Wasatch has to offer. We believe earning your turns gives you the most satisfaction and can get you places a chairlift never could.<br>We will also be offering multi day adventures, seminars, corporate retreats and team building, womens and kids clinics, and much more!<br></p><p>If you are ready to make the best out of your getaway contact us today:<br><span style=font-weight:bold>435-659-6609</span><br></p></div>',
      transclude: true,
      scope: {},
      controllerAs: 'vm',
      controller: function(){
        console.log("SUPER AWESOME SAMPLE") ;
      }
    }
})
