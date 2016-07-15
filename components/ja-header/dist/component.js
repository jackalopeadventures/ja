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
