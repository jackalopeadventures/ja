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
