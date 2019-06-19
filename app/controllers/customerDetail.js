'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var customerDetailController = function ($scope,$rootScope,$location) {

   
  
//     $scope.customer = function(){
//       alert("success");
//   };

   $scope.customerDetailData = function (cust_id){
       $rootScope.custmerDetails(cust_id);
       if(custmerDetails.cust_id = cust_id )
       {
         $scope.customerdata = cust_id;
       }
       else{
         alert("connection peoblem");
       }
   };

    };

    customerDetailController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('customerDetailController', customerDetailController)
  })();