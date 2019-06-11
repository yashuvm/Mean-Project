'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','sensorConfigService'];
  var sensorConfigController = function ($scope,$rootScope,$location,sensorConfigService) {

    $scope.selectedalerttype = {};

    $scope.alertType = 
    [
      {
      "selected":false,
      "name":"Civil",
     },
    {
      "selected":false,
      "name":"Health",
     },
     
    ];
    $scope.selectedalerttype   =   $scope.alertType[0];  

    $scope.selectedalertlocation = {};

    $scope.alertlocation = 
    [
      {
      "selected":false,
      "name":"Bedroom",
     },
    {
      "selected":false,
      "name":"Drawing Room",
     },
     {
      "selected":false,
      "name":"Toilet",
     },
     {
      "selected":false,
      "name":"Kitchen",
     },
     
    ];
    $scope.selectedalertlocation   =   $scope.alertlocation[0];  

    $rootScope.custmerDetails = function () {
   
      $scope.customerDetailsdata = [];
      $rootScope.customerDetails = {};
      sensorConfigService.custmerDetails().success(function (result) {
       
        if (result) {
         
          $rootScope.customerDetails = result;
         
          angular.forEach($rootScope.customerDetails, function (element) {
          //  alert(element)
           $rootScope.customerDetailsvalue = element;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };

    };

    sensorConfigController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('sensorConfigController', sensorConfigController)
  })();