angular.module("home", []);

  angular.module('home').controller('homeController', ['blogs', homeController]);

    function homeController(blogs) {
        var vm = this;

       vm.blog = truncate(blogs[0].blog);
       vm.blogs = blogs;

        function truncate(string){
           var str = strip(string);
           if (str.length > 200)
              return str.substring(0,200)+'<span class="click-more">...(click to see more)</span>';
           else
              return str;
        };

        function strip(html)
        {
           var tmp = document.createElement("DIV");
           tmp.innerHTML = html;
           return tmp.textContent || tmp.innerText || "";
        }


    };

angular.module("home")
.directive('home', function(){
    return {
      restrict: 'E',
      template:'<div class="col-med-12 col-lg-6 main_img_container"><img src=/img/not_all_who_wander.jpg style=width:80%;></div><a ui-sref=blog><div class="col-sm-12 col-lg-6 main_content content-round-corners blog-news"><h1>{{vm.blogs[0].title}}</h1><div ng-bind-html=vm.blog></div></div></a><div class="col-sm-12 col-lg-6 main_content content-round-corners"><p class=home-blurb>Whether it\'s a Dawn Patrol hike up to watch the sunrise over the Wasatch before skiing the Greatest Snow on Earth in the winter or a bike shuttle on the legendary Crest trail in the summer we have you covered.<br>Our experienced, friendly, and enthusiastic guides will show you some of the most beautiful landscapes the Wasatch has to offer. We believe earning your turns gives you the most satisfaction and can get you places a chairlift never could. We will also be offering multi day adventures, seminars, corporate retreats and team building, womens and kids clinics, and much more!<br><a ui-sref=about>Click hereto discover our winter packages.</a></p></div>',
      transclude: true,
      scope: "="
    }
})
