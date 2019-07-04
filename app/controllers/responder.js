'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','responderService'];
  var responderController = function ($scope,$rootScope,$location,responderService) {


    $rootScope.getResponderData = function () {
   
      // $scope.customerDetailsdata = [];
      $rootScope.responderDetails = {};
      responderService.getResponderData().success(function (result) {
       
        if (result) {
         
          $rootScope.responderDetails = result;
         
          angular.forEach($rootScope.responderDetails, function (element) {
          //  alert(element)
           $rootScope.respondervalue = element;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };
    };

    responderController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('responderController', responderController)
  })();