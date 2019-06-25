'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','sensorConfigService'];
  var sensorConfigController = function ($scope,$rootScope,$location,$filter,sensorConfigService) {

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
           $rootScope.custIdValue = $rootScope.customerDetailsvalue.cust_id;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };
    $scope.addsesorconfig = {
      cust_id:"",
      sensor_no:"",
      alert_msg:"",
      alert_type:"",
      alert_location:"",
    }
    $scope.addSensorConfig = function () {
      $scope.cust_id = $scope.customerId.cust_id;
     $scope.sensor_no = $scope.addsesorconfig.sensor_no ;
     $scope.alert_msg = $scope.addsesorconfig.alert_msg ;
     $scope.addsesorconfig.alert_type = $scope.selectedalerttype.name;
     $scope.alert_type = $scope.addsesorconfig.alert_type ;
     $scope.addsesorconfig.alert_location = $scope.selectedalertlocation.name;
     $scope.alert_location = $scope.addsesorconfig.alert_location ;
     sensorConfigService.addSensorConfig($scope.cust_id,$scope.sensor_no,$scope.alert_msg,$scope.alert_type,$scope.alert_location).success(function (result) {   
       if(result=="success"){
         alert("Your Sensor Information Added Successfully");
         window.location = '/sensorConfig/' ;
       } 
      });
    };
    $scope.getSensorConfigData = function () {
     
     sensorConfigService.getSensorConfigData().success(function (result) {   
       if(result){
         
        $scope.getSensorData = result;
        $rootScope.sensordataCustId = $scope.getSensorData[0].cust_id;
       }
       
      });
    };

    };

    sensorConfigController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('sensorConfigController', sensorConfigController)
  })();