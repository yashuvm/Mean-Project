/**
 * Created by root on 29/6/16.
 */
(function () {
    var injectParams = ['$sails','$rootScope'];
    var mainService = function ($sails,$rootScope) {
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
        return $sails.get("/api/employee")
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