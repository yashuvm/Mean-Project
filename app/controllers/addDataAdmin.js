'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','addDataAdminService'];
  var addDataAdminController = function ($scope,$rootScope,$location,$filter,addDataAdminService) {


 
 
  //  $scope.custvalue.value =   $rootScope.customerDetails ; 
 
  
  $scope.customerDetail_Id=function(){
    $scope.detail_data = $rootScope.customerDetails;
    $scope.customerId = $rootScope.customerIdValue ;
    angular.forEach($scope.detail_data, function (element) {
         $scope.Id = element.cust_id;
         if($scope.Id == $scope.customerId){
           $scope.customerIdDetailsData = element;
           if($scope.customerIdDetailsData.alert_mob == '91undefined'){
            $scope.customerIdDetailsData.alert_mob = "";
           }
           else{
            $scope.customerIdDetailsData.alert_mob = $scope.customerIdDetailsData.alert_mob;
         
           }
         }
      })
  }

 
 
    };

    addDataAdminController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addDataAdminController', addDataAdminController)
  })();