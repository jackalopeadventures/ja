angular.module("sample", []);

angular.module("sample")
.directive('sample', function(){
    return {
    
        restrict: 'E',
        template:'<span ng-bind=ctrl.msg></span>',
        replace: true,
        scope: "=",

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
