/**
 * Created by root on 22/4/19.
 */
(function () {
  var injectParams = ['$http','$rootScope'];
  var loginService = function ($http,$rootScope) {
    // var serviceBase = "http://localhost:3000";
    var factory = {};
    
  /***************** *************************************
   functionName:testing
   inputJSON:
   outputJSON:
   Description:
   UseIn:mainController
   OwnerName:Sushma
   Date:

   *******************************************************/

  // factory.testing = function () {
  //     return $http.get("http://localhost:3000/api/employee")
  //       .success(function (results) {
  //         return results;
  //         })
  //         .error(function (data) {
  //             alert('Problem in connection!');
  //         });
  // };
 
  factory.login = function (email, password) {
    var serviceInput = {};
    serviceInput.email = email;
    serviceInput.password = password;
  
    return $http.post("http://13.233.7.113:5000/api/login", serviceInput)
      .success(function (results) {
        return results;
      })
      .error(function (data) {
        alert('email incorrect');
      });
  };

    return factory;
  };
  loginService.$inject = injectParams;
  angular.module('seniorApp')
    .factory('loginService', loginService);
})();


//   //my code
// 'use strict';

// app.factory('loginService', ['$http','$location', sessionService{
//     return{
//         login:function(data,scope){
//             var $promise=$http.post('data/user.php',data);
//             $promise.then(function(msg){
//               var uid=msg.data;
//               if(uid){
//                 //scope.msgtxt='correct information';
//                 sessionService.set('user',uid);
//                 $location.path('/home');
//               }
//               else {
//                 scope.msgtxt='incorrect information';
//                 $location.path('/login');
//               }
//             });
//           },



//         lougout:function(){
//             sessionService.destroy('user');
//             $location.path('/login');
//         }
//     }
// });
// //my code end
