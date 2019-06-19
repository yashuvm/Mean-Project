'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter', 'monitoringService'];
  var monitoringController = function ($scope,$rootScope,$location,$filter,monitoringService) {


  $scope.monitoringdata = function () {
   
    $scope.monitoringDetails = {};
    monitoringService.monitoringdata().success(function (result) {
     
      if (result) {
       
        $scope.monitoringDetails = result;
       
        angular.forEach($rootScope.monitoringDetails, function (element) {
        
         $rootScope.monitoringvalue = element;
       
        })
       
      }
     
    });
  };
  $scope.viewdata = function (emg_id) {
    $rootScope.viewId = emg_id;
    monitoringService.viewdata(emg_id).success(function (result) {  
      if (result) { 
        $rootScope.viewdataDetails = result;
      }
     
    });
  };
  $scope.getRemark = function (emg_id) {
    $scope.remarkId = emg_id;
    monitoringService.getRemark($scope.remarkId).success(function (result) {  
      if (result) { 
        $rootScope.RemarkdataDetails = result;
        // window.location = '/monitoring/#Remark2'
      }
      else{
        $rootScope.RemarkdataDetails = "No Remarks";
      }
     
    });
  };
  $scope.addRemarkvalue = {
    emg_id:"",
    remark:"",
    // r_datetime:"",
    r_user:"Control Room"
  }
  $scope.addRemark = function () {
    $scope.addRemarkvalue.emg_id = $rootScope.viewId;
    $scope.emg_id = $scope.addRemarkvalue.emg_id;
    // $scope.addRemarkvalue.r_datetime = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
    // $scope.hhmmsstt = $filter('date')(new Date(), 'hh:mm:ss a');
    // $scope.r_datetime = $scope.addRemarkvalue.r_datetime;
    $scope.remark = $scope.addRemarkvalue.remark;
    $scope.r_user = $scope.addRemarkvalue.r_user;
    monitoringService.addRemark($scope.emg_id,$scope.remark,$scope.r_user).success(function (result) {  
      if (result == "ok") { 
        $scope.remarkDetails = result;
        window.location = '/monitoring/#Remark2'
      }
    });
  };
 
 
    };

    monitoringController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('monitoringController',monitoringController)
  })();