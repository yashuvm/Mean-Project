'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter', 'assignResponderService','emergencyCasesService'];
  var assignResponderController = function ($scope,$rootScope,$location,$filter,assignResponderService,emergencyCasesService) {
    $scope.viewdata = function (emg_id) {
        $rootScope.viewId = emg_id;
        emergencyCasesService.viewdata(emg_id).success(function (result) {  
          if (result) { 
            $rootScope.viewdataDetails = result;
            $rootScope.viewId = $rootScope.viewdataDetails[0].flag_monitoring;
          }
        });
      };
      $scope.getFlagValue = function(emg_id){
        $rootScope.emg = emg_id; 
        emergencyCasesService.getFlagValue($scope.emg).success(function (result) {
          if (result) {
            $scope.flag = result;
            $rootScope.flagValue1 = $scope.flag[0].flag_monitoring; 
            // $scope.btnEnabler($rootScope.emg);  
          }  
        });
      };
      
    };

    assignResponderController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('assignResponderController', assignResponderController)
  })();