angular.module('blog').factory('Blog', Blog);

function Blog($q, $http) {
   if(env.debug == 'true'){
     var urlBase = env.devApi+"blogs.php?dsp=";
   }else{
    var urlBase = env.apiLink+"blogs.php?dsp=";
    }
    var contentFactory = getContentActions();
    return contentFactory;

    function getContentActions() {

        var list = {};
        list.getLatest = function() {

            return $http.post(urlBase+"latest").then(function(response) {
              return response.data;
            });

        };

        // /**
        //   grab a single group bundle
        //   id == bundleId
        // **/
        //
        // list.getGroup = function(bundleObj) {
        //     params.method="GET";
        //     params.uri = paramRoot+"/"+bundleObj.id ;
        //     return $http.post(urlBase ,params).then(function(response) {
        //         params = angular.copy(master);
        //         return response.data;
        //     }, function(data) {
        //         //make stub instead for now
        //         if (!data.data) {
        //             return {
        //                 "groupInfo": [{
        //                     "name": "TEST GROUP"
        //                 }],
        //                 "userList": [{
        //                     "LoginName": "testy MyTest",
        //                     "userID": 123
        //                 }]
        //             }
        //         }
        //     });
        // }
        //
        // list.addUser = function(userId, groupId) {
        //     //api/groups:/groupId/users/:userId
        //     params.method="POST";
        //     params.uri = paramRoot+"/"+groupId + '/users/' + userId;
        //
        //     return $http.post(urlBase, params ).then(function(results) {
        //         params = angular.copy(master);
        //         return results.data;
        //     });
        //
        // }
        //
        // list.removeUser = function(userId, groupId) {
        //     //api/groups:/groupId/users/:userId
        //     params.method="DELETE";
        //     params.uri = paramRoot+"/"+groupId + '/users/' + userId;
        //
        //     return $http.post(urlBase, params ).then(function(results) {
        //         params = angular.copy(master);
        //         return results.data;
        //     });
        //
        // }
        //
        // list.searchUsers = function(search) {
        //
        //     params.method="POST";
        //
        //     params.uri = env.nodeurl+'users';
        //     params.parameters = search;
        //
        //     return $http.post(urlBase ,params).then(function(results) {
        //         params = angular.copy(master);
        //         return results.data;
        //     }, function(data) {
        //         console.log(data.message)
        //         if (!data.data) {
        //             return{"users":
        //                [{
        //                     "LoginName": "testy MySearchTest",
        //                     "userID": 123
        //                 }]
        //                 }
        //
        //         }
        //     });
        //
        // }


        return list;

    }

}
