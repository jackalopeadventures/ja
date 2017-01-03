angular.module("blog", []);

  angular.module('blog').controller('blogController', [ '$http','Blog' ,'blogs','Lightbox',blogController]);

    function blogController($http,Blog,blogs,Lightbox) {
        var vm = this;
        vm.blogs = blogs[0];
        vm.images = blogs['images'];
        vm.blogClass ="col-md-8  col-md-offset-2 blog content-round-corners";
        console.log(blogs['images'])
        if(blogs['images'] ){
          vm.blogClass = "col-md-8  blog content-round-corners";
        }
        // create a blank object to hold our form information
       // $scope will allow this to pass between controller and view
       vm.formData = {};
       Blog.addView(vm.blogs[0].id);


       vm.openLightboxModal = function (index) {
         console.log('open modal',index)
         Lightbox.openModal(vm.images, index);
       };




    };

    angular.module('blog').filter('addOne', function() {
      return function(input) {
        var i = parseInt(input);
          return i+1;
          };
    });
