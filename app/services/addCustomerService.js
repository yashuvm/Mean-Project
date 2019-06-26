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

      return factory;
    };
    addCustomerService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('addCustomerService', addCustomerService);
  })();