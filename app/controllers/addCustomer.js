'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','addCustomerService'];
  var addCustomerController = function ($scope,$rootScope,$location,$filter,addCustomerService) {

$scope.getCommunityData = function () {
  $scope.getCommunityManagerdata = {};
  addCustomerService.getCommunityData().success(function (result) {
    if (result) {
      $scope.getCommunityManagerdata = result;
      angular.forEach($scope.getCommunityManagerdata, function (data) {
       $scope.getCommunityManagerdatavalue = data;
      })
    }
  });
};
 
$scope.homecare_reg = {
  user_name: "",
  mobile_number: "",
  prefered_name: "",
  user_type: "customer",
  alert_mob: "",
  regn_type: "",

},
$scope.addCustomer = function(){
   $scope.homecare_reg.user_name = $scope.user_name;
   $scope.homecare_reg.mobile_number = $scope.mobile_number;
   $scope.homecare_reg. prefered_name = null;

};
 };

    addCustomerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addCustomerController',addCustomerController)
  })();