'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','addDataAdminService'];
  var addDataAdminController = function ($scope,$rootScope,$location,addDataAdminService) {


 
 
  //  $scope.custvalue.value =   $rootScope.customerDetails ; 
  $scope.customerIdData = function(){
    $scope.customerId = $rootScope.customerIdValue ;
    addDataAdminService.customerId($scope.customerId).success(function (result) {
     
      if (result) {
       
        $scope.customerIdDetailsData = result;
       
      }
     
    });

  };
  
 
    };

    addDataAdminController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addDataAdminController', addDataAdminController)
  })();