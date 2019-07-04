/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var addCustomerService = function ($http,$rootScope) {
      // var serviceBase = "http://localhost:3000";
      var factory = {};
      
    /***************** *************************************
     functionName:custmerDetails
     inputJSON:
     outputJSON:
     Description:
     UseIn:mainController
     OwnerName:Sushma
     Date:

     *******************************************************/
    factory.getCommunityData = function () {
     
      return $http.get("http://13.233.7.113:5000/api/get/community")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
    
      return factory;
    };
    addCustomerService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('addCustomerService', addCustomerService);
  })();