  angular.module('blog').controller('blogController', [ '$http','Blog' ,'blogs',blogController]);

    function blogController($http,Blog,blogs) {
        var vm = this;
        vm.blogs = blogs;
        // create a blank object to hold our form information
       // $scope will allow this to pass between controller and view
       vm.formData = {};
       Blog.addView(vm.blogs[0].id);





    };

    angular.module('blog').filter('addOne', function() {
      return function(input) {
        var i = parseInt(input);
          return i+1;
          };
    });
