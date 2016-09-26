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
