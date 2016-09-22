angular.module("blog")
.directive('blog', function(){
    return {
      restrict: 'E',
      templateUrl: 'blog.html',
      replace: true,
      scope: "="
    }
})
