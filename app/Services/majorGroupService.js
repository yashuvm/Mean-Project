/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var majorGroupService = function ($http,$rootScope) {
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


        return factory;
    };
    majorGroupService.$inject = injectParams;
    angular.module('CASA')
        .factory('majorGroupService',majorGroupService);
})();

