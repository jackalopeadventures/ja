angular.module("contact")
.directive('contact', function(){
    return {
      restrict: 'E',
      templateUrl: 'contact.html',
      replace: true,
      scope: "="
    }
})
