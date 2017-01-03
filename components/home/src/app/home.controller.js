
angular.module("home", ['bootstrapLightbox']);

  angular.module('home').controller('homeController', ['blogs','Blog','Lightbox', homeController]);

    function homeController(blogs,Blog,Lightbox) {
        var vm = this;

       vm.blog = blogs[0].blog;
       vm.images = blogs['images'];
       vm.blogs = blogs;
        Blog.addView(blogs[0].id);
       vm.sponsors = [
          {img:'img/voile_logo_black.png', alt:'Voile Skis and Splitboards'},
          {img:'img/neversummer.png', alt:'NeverSummer Snowboards'},
          {img:'img/goride.jpg', alt:'Go-Ride bikes'},
          // {img:'img/dps-red-logo.png', alt:'DPS Skis'},
          {img:'img/blackdiamond.jpg', alt:'Black Diamond Equipment'},
       ]



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

        vm.openLightboxModal = function (index) {
          console.log('open modal',index)
          Lightbox.openModal(vm.images, index);
        };


    };


    angular.module('home').filter('addOne', function() {
      return function(input) {
        var i = parseInt(input);
          return i+1;
          };
    });
