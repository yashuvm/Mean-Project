'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','managerService'];
  var managerController = function ($scope,$rootScope,$location,$filter,managerService) {

    
  
   $rootScope.clusterId = function(clm_id){
    $rootScope.clusterIdValue = clm_id;
   };

    $rootScope.clusterManager = function () {
   
      // $scope.customerDetailsdata = [];
      $rootScope.clusterManagerDetails = {};
      managerService.clusterManager().success(function (result) {
       
        if (result) {
         
          $rootScope.clusterManagerDetails = result;
         
          angular.forEach($rootScope.clusterManagerDetails, function (element) {
          //  alert(element)
           $rootScope.clusterManagerDetailsvalue = element;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };
    
    // $scope.region = {
    //   Id: "",
    // }; 
  
   $rootScope.regionId = function(rm_id){
    $rootScope.regionIdValue = rm_id;
   };

    $rootScope.regionManager = function () {
   
      // $scope.customerDetailsdata = [];
      $rootScope.regionManagerDetails = {};
      managerService.regionManager().success(function (result) {
       
        if (result) {
         
          $rootScope.regionManagerDetails = result;
         
          angular.forEach($rootScope.regionManagerDetails, function (element) {
         
           $rootScope.regionManagerDetailsvalue = element;
           
         
          })
         
        }
       
      });
    };

    $rootScope.communityId = function(cm_id){
      $rootScope.communityIdValue = cm_id;
     };
    $rootScope.communityManager = function () {
   
      // $scope.customerDetailsdata = [];
      $rootScope.communityManagerDetails = {};
      managerService.communityManager().success(function (result) {
       
        if (result) {
         
          $rootScope.communityManagerDetails = result;
         
          angular.forEach($rootScope.communityManagerDetails, function (element) {
          //  alert(element)
           $rootScope.communityManagerDetailsvalue = element;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };
    $rootScope.getCareCoordinator = function () {
   
      // $scope.customerDetailsdata = [];
      $rootScope.careCoordinatorDetails = {};
      managerService.getCareCoordinator().success(function (result) {
       
        if (result) {
         
          $rootScope.careCoordinatorDetails = result;
         
          angular.forEach($rootScope.careCoordinatorDetails, function (element) {
          //  alert(element)
           $rootScope.careCoordinatorDetailsvalue = element;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };

    };

    managerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('managerController', managerController)
  })();