'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','careManagerService'];
  var careManagerController = function ($scope,$rootScope,$location,careManagerService) {


    $rootScope.getCareManagerData = function () {
   
      // $scope.customerDetailsdata = [];
      $rootScope.CareManagerDetails = {};
      careManagerService.getCareManagerData().success(function (result) {
       
        if (result) {
         
          $rootScope.careManagerDetails = result;
         
          angular.forEach($rootScope.careManagerDetails, function (element) {
          //  alert(element)
           $rootScope.careManagervalue = element;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };
    };

    careManagerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('careManagerController', careManagerController)
  })();