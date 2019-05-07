/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var mainService = function ($http,$rootScope) {
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

    factory.testing = function () {
        return $http.get("http://localhost:3000/api/employee")
          .success(function (results) {
            return results;
            })
            .error(function (data) {
                alert('Problem in connection!');
            });
    };
   
  

      return factory;
    };
    mainService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('mainService', mainService);
  })();