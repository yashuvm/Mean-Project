'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var addDataAdminController = function ($scope,$rootScope,$location) {


    $scope.clicked1 = function(){
      alert("Successfully data Send");
  }
  
  

  
  // $scope.customerId = $rootScope.customerIdValue ;
 
  $scope.custvalue = [{
    value:""
  }];
  //  $scope.custvalue.value =   $rootScope.customerDetails ; 
  $scope.customerIdData = function(){
    $scope.customerId = $rootScope.customerIdValue ;
    $scope.custvalue.value =   $rootScope.customerDetails ;

    angular.forEach($scope.custvalue.value, function (element) {
      $scope.customerValue = element;
        if( $scope.customerId == $scope.customerValue.cust_id){
          $scope.custvalue = $scope.customerValue;
        }
       
      })

  }

  $scope.clicked = function(){
    alert("Data Admin Added Successfully");
}
  
 
    };

    addDataAdminController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addDataAdminController', addDataAdminController)
  })();