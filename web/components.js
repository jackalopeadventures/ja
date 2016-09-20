angular.module("sample", []);

angular.module("sample")
.directive('sample', function(){
    return {
      rescrict: 'E',
      template:'<span ng-bind=ctrl.msg></span>',
      transclude: true,
      scope: {},
      controllerAs: 'ctrl',
      controller: function(){
        this.msg = "SUPER AWESOME SAMPLE";
      },
      link: function(scope, element, attr){
        function randomColor(){
          var colors = []
          for(var i = 0; i < 3; i++){
            colors[i] = Math.floor((Math.random() * 256) + 1);
          }
          return colors;
        }

        element.bind("click", function(){
          element.css('background-color', "rgb("+ randomColor() +")");
          element.css('color', "rgb("+ randomColor() +")");
        })
      }
    }
})

angular.module("about", []);

angular.module('about').controller('aboutController', [ '$http',aboutController]);

  function aboutController($http) {
      var vm = this;
      console.log('about');


      getInfo();
      function getInfo(){
            // Sending request to EmpDetails.php files
            $http.post('http://jackalopeadventures.com/api/users.php').success(function(data){
                console.log(data);
            });
      }
  };


angular.module("about")
.directive('about', function(){
    return {
      restrict: 'E',
      template:'<div class="col-sm-12 col-lg-6 main_img_container"><img src=/img/close_up.jpg style=width:80%;></div><div class="col-sm-12 col-lg-6 main_content"><p>Jackalope Adventures is a non-profit company started by Corey Smaller in 2015. Our main focus is getting kids and young adults who don\'t have the means to learn about and enjoy some of the wonderful things the Wasatch range has to offer. Hopefully in the near future we can offer donated equipment to better teach them.</p><p>We believe learning a physical activity like skiing or snowboarding, or how to ride a mountain bike with proper etiquette and technique not only empowers the learner and gives them a sense of accomplishment but also gives them a tool to express themselves and get out into nature.</p></div>',
      transclude: true,
      scope: {},
      controllerAs: 'vm',
      controller: aboutController
      

    }
})

angular.module("contact", []);

  angular.module('contact').controller('contactController', [ '$http',contactController]);

    function contactController($http) {
        var vm = this;
        // create a blank object to hold our form information
       // $scope will allow this to pass between controller and view
       vm.formData = {};

       // process the form
       vm.processForm = function () {
         console.log('contact us')
         $http.post('http://jackalopeadventures.com/api/sendMail.php',vm.formData).success(function(data){

             if(data.success == true){
               alert('Your Email has been sent. Thanks for contacting us.')

             }else{
               alert('Your email has not been sent. Please check your fields and try again');
             }
         });
          //  $http({
          //      method: 'POST',
          //      url: 'index.php',
          //      data: $.param(vm.formData),  // pass in data as strings
          //      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
          //  })
          //      .success(function (data) {
          //          console.log(data);
           //
          //          if (!data.success) {
          //              // if not successful, bind errors to error variables
          //              vm.errorName = data.errors.name;
          //              vm.errorSuperhero = data.errors.superheroAlias;
          //          }
          //          else {
          //              // if successful, bind success message to message
          //              vm.message = data.message;
           //
          //          }
          //      });

       };

    };

angular.module("contact")
.directive('contact', function(){
    return {
      restrict: 'E',
      template:'<div class="col-md-6 col-md-offset-3 emailer"><div class=page-header><h1><span style="font-size:20px; margin-left:10px;">you can call us at : 435-659-6609 or Send a quick email</span></h1></div><form ng-submit=vm.processForm()><div id=name-group class=form-group ng-class="{ \'has-error\' : errorName }"><label>Name</label> <input type=text name=name class=form-control ng-model=vm.formData.name required> <span class=help-block ng-show=vm.errorName></span></div><div id=email-group class=form-group ng-class="{ \'has-error\' : errorEmail }"><label>Email</label> <input type=email name=email class=form-control placeholder=yourname@example.com ng-model=vm.formData.email required> <span class=help-block ng-show=vm.errorEmail></span></div><div id=content-group class=form-group ng-class="{ \'has-error\' : errorContent }"><label>Message</label> <textarea rows=5 cols=50 class=form-control placeholder="What\'s up?" ng-model=vm.formData.content required></textarea> <span class=help-block ng-show=vm.errorContent></span></div><button type=submit class="btn btn-success btn-lg btn-block"><span class="glyphicon glyphicon-flash"></span> Send</button></form></div>',
      replace: true,
      scope: "="
    }
})

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

angular.module("ja-footer", []);

angular.module("ja-footer")
.directive('jaFooter', function(){
    return {
      restrict: 'E',
      template:'<div><ul class=juicer-feed data-feed-id=jackalope data-filter=Instagram></ul></div>',
      transclude: true,
      scope: {},
      controllerAs: 'vm',
      controller: function(){
       console.log('here')
      }

    }
})

angular.module("ja-header", []);

  angular.module('ja-header').controller('headerController', [ headerController]);

    function headerController() {
        var vm = this;
    };

angular.module("ja-header")
.directive('jaHeader', function(){
    return {
      restrict: 'E',
      template:'<div class=header><img src=/img/logo-wide.png class=logo></div>',
      transclude: true,
      scope: {},
      controllerAs: 'vm',
      controller: headerController

    }
})


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
      template:'<div class=navbar><div class=navbar-inner><ul class=nav><li><a ui-sref=home>HOME</a></li><li><a ui-sref=about>ABOUT</a></li><li><a ui-sref=packages>PACKAGES</a></li><li><a ui-sref=contact>CONTACT</a></li></ul></div></div>',
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
            .state('about', {
                url: "/about",
                template: "<about></about>",
                controller: 'aboutController',
                controllerAs: 'vm'

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
                controllerAs: 'vm'

            })

        $urlRouterProvider.otherwise("/");



    }

);

angular.module("packages", []);

angular.module('packages').controller('packagesController', [ packagesController]);

  function packagesController() {
      var vm = this;
      console.log('packages');
  };


angular.module("packages")
.directive('packages', function(){
    return {
      restrict: 'E',
      template:'<div class="col-sm-12 col-lg-6 main_img_container"><img src=/img/patsfan.jpg style=width:80%;></div><div class="col-sm-12 col-lg-6 main_content content-round-corners"><h1>BACKCOUNTRY PACKAGES</h1><p>Wherever you want to go (weather permitting) we can take you. You like trees? Steeps? Wide Open Bowls? Yeah, we got that.<br>Costs vary on the size of the party and length of time of the tour.</p><div class=package><h2>Side Country Tours</h2><p>Maybe a full hike is a little too strenuous for the party. That\'s ok, we understand.<br>With easy access from all of the resorts in the Wasatch range we can get the goods without a ton of hiking.<br>We can show you the secret spots off Brighton, Snowbird, Alta, Solitude, and PCMR.</p></div><div class=package><h2>Dawn Patrol</h2><p>The early bird catches the worm!<br>There is nothing like watching the sun rise at the top of a peak with the satisfaction of Earning Your Turns.<br>Enjoy the serenity of the early morning Wasatch before dropping into the Greatest Snow on Earth. This experience truly makes your vacation memorable! With our guides you can be done before the lifts start turning!<br></p></div><div class=package><h2>Backcountry Lessons</h2><p>Want to learn the basics of the backcountry? How to use a splitboard or touring skis? Or maybe you just want to get better at skiing powder. Our guides can help!</p></div><div class=package><h2>Private Ski/Snowboarding Lessons</h2><p>Whether you are a first timer or want to polish up on your skills we have you covered. In-bounds half day and full day lessons are available as well at a few different resorts in the Wasatch.</p></div><div class=package><h2>Snowshoe Tours</h2><p>Take a beautiful stroll in the woods. Hike to a waterfall in a cave or to an untouched peak without worrying about sinking up to your waist in the snow. See what the Wasatch has to offer at a slower pace.</p></div></div>',
      transclude: true,
      scope: {},
      controllerAs: 'vm',
      controller:packagesController

    }
})
