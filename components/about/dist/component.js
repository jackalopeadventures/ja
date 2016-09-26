angular.module("about", []);

angular.module('about').controller('aboutController', [ '$http',aboutController]);

  function aboutController($http) {
      var vm = this;
      console.log('about');
      var api = env.apiLink;
      vm.blogs = null;
      getInfo();
      
      function getInfo(){
            // Sending request to EmpDetails.php files
            $http.post(api+'blogs.php').success(function(data){
              vm.blogs =data;
            });
      }
  };


angular.module("about")
.directive('about', function(){
    return {
      restrict: 'E',
      template:'<div><div class="col-sm-12 col-lg-6 main_img_container"><img src=/img/close_up.jpg style=width:80%;></div><div class="col-sm-12 col-lg-6 main_content content-round-corners"><p>Jackalope Adventures is a non-profit company started by Corey Smaller in 2015. Our main focus is getting kids and young adults who don\'t have the means to learn about and enjoy some of the wonderful things the Wasatch range has to offer. Hopefully in the near future we can offer donated equipment to better teach them.</p><p>We believe learning a physical activity like skiing or snowboarding, or how to ride a mountain bike with proper etiquette and technique not only empowers the learner and gives them a sense of accomplishment but also gives them a tool to express themselves and get out into nature.</p></div></div>',
      replace: true,
      scope: "=",
      transclude: true




    }
})
