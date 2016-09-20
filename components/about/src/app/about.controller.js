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
