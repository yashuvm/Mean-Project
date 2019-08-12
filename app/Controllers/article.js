'use strict';

(function () {

    var injectParams = ['$scope','$rootScope','$window','$location','$http','LocalStorageService','articleService'];
    var articleController = function ($scope,$rootScope,$window,$location,$http,LocalStorageService,articleService) {

        /***************** *************************************
         functionName:loginId
         inputJSON:
         outputJSON:email_id,password,roll_id
         Description:
         UseIn:baseController
         MadeBy:Sushma Shukla
         Date: 24/07/2019

         *******************************************************/

    };

    articleController.$inject = injectParams;
    angular.module('CASA')
        .controller('articleController', articleController)
})();