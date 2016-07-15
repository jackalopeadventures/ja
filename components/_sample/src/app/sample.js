angular.module("sample")
.directive('sample', function(){
    return {
      rescrict: 'E',
      templateUrl: 'sample.html',
      transclude: true,
      scope: {},
      controllerAs: 'ctrl',
      controller: function(){
        this.msg = "SUPER AWESOME SAMPLE";
      },
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
