/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var articleService = function ($http,$rootScope) {
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
    articleService.$inject = injectParams;
    angular.module('CASA')
        .factory('articleService', articleService);
})();

