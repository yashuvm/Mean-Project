/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var mainService = function ($http,$rootScope) {
    //   var serviceBase = '/api/employee/';
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
        return $http.get("api/employee")
          .success(function (data) {
            return data;
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