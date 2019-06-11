/**
 * Created by root on 25/5/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var careManagerService = function ($http,$rootScope) {
      // var serviceBase = "http://localhost:3000";
      var factory = {};
      
    /***************** *************************************
     functionName:clusterManager
     inputJSON:
     outputJSON:
     Description:
     UseIn:managerController
     OwnerName:Sushma
     Date:

     *******************************************************/

    factory.getCareManagerData = function () {
     
      return $http.get("http://13.234.179.251:5000/api/get/care_manager")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };

      return factory;
    };
    careManagerService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('careManagerService',careManagerService);
  })();