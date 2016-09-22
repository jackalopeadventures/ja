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
