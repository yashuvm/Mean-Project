'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter'];
  var emergencycaseDetailController = function ($scope,$rootScope,$location,$filter) {

    $scope.emergencyIdData = function(){
      $scope.emergencyId = $rootScope.emergencyIdValue ;
      $scope.emeregencydata =   $rootScope.emergencyDetails ;
      angular.forEach( $scope.emeregencydata , function (element) {
        $scope.emeregencydataValue  = element;
          if( $scope.emergencyId == $scope.emeregencydataValue.emg_case_no){
            $scope.emergency = $scope.emeregencydataValue;
          }
         
        });
    };
   
    
   
  };
  emergencycaseDetailController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('emergencycaseDetailController', emergencycaseDetailController)
  })();