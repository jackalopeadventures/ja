angular.module("about", []);

angular.module('about').controller('aboutController', [ aboutController]);

  function aboutController() {
      var vm = this;
      console.log('about');
  };


angular.module("about")
.directive('about', function(){
    return {
      rescrict: 'E',
      template:'<div class=about><h1>About</h1></div>',
      transclude: true,
      scope: {},
      controllerAs: 'ctrl',
      controller: function(){
        console.log('about!');
      }

    }
})
