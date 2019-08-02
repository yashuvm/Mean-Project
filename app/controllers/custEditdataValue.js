'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','addCustomerService','editcustDetailService'];
  var custEditdataValueController=function ($scope,$rootScope,$location,$filter, addCustomerService,editcustDetailService) {

   
//  $scope.status=function(){
//    $scope.name=['active','inActive']
//  }
 

   $scope.getCommunityData=function(){
    $scope.getCommunityManagerdata ={};
    addCustomerService.getCommunityData().success(function (result) {
        if (result) {
          $scope.getCommunityManagerdata = result;
          angular.forEach($scope.getCommunityManagerdata, function (data) {
           $scope.getCommunityManagerdatavalue = data;
          })
        }
      });
   }

  $scope.editCustData = function(){
    $scope.editDetail_data = $rootScope.customerDetails;
    $scope.editCustomerId = $rootScope.customerIdValue ;
    angular.forEach($scope.editDetail_data, function (element) {
         $rootScope.editId = element.cust_id;
         if($rootScope.editId == $scope.editCustomerId){
           $scope.editCustomerIdDetailsData = element;
           if($scope.editCustomerIdDetailsData){
             if($scope.editCustomerIdDetailsData.alert_mob == null ){
              $scope.alertMob = "";
             }
             else if($scope.editCustomerIdDetailsData.alert_mob == ""){
              $scope.alertMob = "";
             }
             else{
               if($scope.editCustomerIdDetailsData.alert_mob.length == 10){
                $scope.alertMob= $scope.editCustomerIdDetailsData.alert_mob;
           
               }
               else if($scope.editCustomerIdDetailsData.alert_mob.length == 12){
                $scope.alertMob= $scope.editCustomerIdDetailsData.alert_mob.slice(2,12);
           
               }
             }
             
             if($scope.editCustomerIdDetailsData.cust_mob.length == 10){
              $scope.mob= $scope.editCustomerIdDetailsData.cust_mob;
         
             }
             else if($scope.editCustomerIdDetailsData.cust_mob.length == 12){
              $scope.mob = $scope.editCustomerIdDetailsData.cust_mob.slice(2,12);
             }
             if($scope.editCustomerIdDetailsData.pri_emg_mob.length == 10){
              $scope.pre_emg_mob = $scope.editCustomerIdDetailsData.pri_emg_mob;
         
             }
             else if($scope.editCustomerIdDetailsData.pri_emg_mob.length == 12){
              $scope.pre_emg_mob= $scope.editCustomerIdDetailsData.pri_emg_mob.slice(2,12);
             }
            
           }
              
         }
      })
    }   
  
  $scope.updateCustData= function(cust_id){
    $scope.cust_id=cust_id;
    $scope.cust_code= $scope.editCustomerIdDetailsData.cust_code;

    $scope.cust_name= $scope.editCustomerIdDetailsData.cust_name;
    $scope.cust_mob= "91"+$scope.mob;
    $scope.cust_email= $scope.editCustomerIdDetailsData.cust_email;
    $scope.cust_address= $scope.editCustomerIdDetailsData.cust_address;
    if($scope.editcommunity){
      $scope.comm_id = $scope.editcommunity.comm_id;
    }
    else{
      $scope.comm_id = $scope.editCustomerIdDetailsData.comm_id;
   
    }
    // if($scope.commdata)
    // {
    //   $scope.comm_name=$scope.commdata.comm_id
    // }
    $scope.alertdata="91"+$scope.alertMob;
    if($scope.alertdata==null){
      $scope.alert_mob=null
    }
    else{
      $scope.alert_mob=$scope.alertdata
    }
    $scope.pri_emg_name = $scope.editCustomerIdDetailsData.pri_emg_name;
    $scope.pri_emg_mob ="91"+$scope.pre_emg_mob;
    $scope.cust_status = $scope.editCustomerIdDetailsData.cust_status;
    if($scope.cust_status){
      $scope.cust_status=$scope.cust_status;
    }
    editcustDetailService.updateCustData($scope.cust_id, $scope.cust_code,$scope.cust_name,$scope.cust_mob,$scope.cust_email,$scope.cust_address,$scope.comm_id,$scope.alert_mob,$scope.pri_emg_name,$scope.pri_emg_mob,$scope.cust_status).success(function(result){
      if (result) {
        alert(result);
        window.location = '/customer/' ;
    }
    else 
    {
      alert("error");
    }
    });
  }
   
}
custEditdataValueController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('custEditdataValueController',custEditdataValueController )
  })();