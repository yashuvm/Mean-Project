'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter', 'emergencyCasesService'];
  var emergencyCasesController = function ($scope,$rootScope,$location,$filter,emergencyCasesService) {


    $scope.selectedemrgtype = {};

 $scope.emrgType = 
 [
   {
   "selected":false,
   "name":"Health",
  },
 {
   "selected":false,
   "name":"Safety",
  },
  
 ];
 $scope.selectedemrgtype   =   $scope.emrgType[0]; 

 $scope.customerData = function () {
   
    $scope.customerDataDetails = {};
    emergencyCasesService.customerData().success(function (result) {
     
      if (result) {
       
        $scope.customerDataDetails = result;
       
        angular.forEach($scope.customerDataDetails, function (element) {
       
         $scope.customerDataDetailsvalue = element;
        
        })
      }
    });
  };

  $scope.emrgCaseData =
  {
    cust_id:"",
    // emg_date_time:"",
    emg_msg:"",
    emg_status:"new",
    emg_type:"",
    emg_recv_mode:"phone",
    emg_desc:"",
    emg_location:"",
    resp_start_time:"",
    est_time_reach:"",
    reaching_time:"",
    closing_time:"",
    cust_remark:"",
    cur_resp_stage:"",
    customerId:"",
 
 }
 $scope.emergencyId = function(emg_case_no){
  $rootScope.emergencyIdValue = emg_case_no;
 };
 
  $scope.assignEmergencyData = function () {
   $scope.valuedate =  $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
    $scope.datetime = $scope.valuedate;
     $scope.cust_id = $scope.emrgCaseData.customerId.cust_id; 
    $scope.emg_msg = $scope.emrgCaseData.emg_msg;
    $scope.emg_status = $scope.emrgCaseData.emg_status;
    $scope.emrgCaseData.emg_type = $scope.selectedemrgtype.name;
    $scope.emg_type = $scope.emrgCaseData.emg_type;
    $scope.emg_recv_mode = $scope.emrgCaseData.emg_recv_mode;
    $scope.emg_desc = $scope.emrgCaseData.emg_desc;
    $scope.emg_location = $scope.emrgCaseData.customerId.cust_address;
    $scope.resp_start_time = $scope.emrgCaseData.resp_start_time;
    $scope.est_time_reach = $scope.emrgCaseData.est_time_reach;
    $scope.reaching_time = $scope.emrgCaseData.reaching_time;
    $scope.closing_time = $scope.emrgCaseData.closing_time;
    $scope.cust_remark = $scope.emrgCaseData.cust_remark;
    $scope.cur_resp_stage = $scope.emrgCaseData.cur_resp_stage;
    emergencyCasesService.assignEmergencyData($scope.datetime,$scope.cust_id,$scope.emg_msg,$scope.emg_status,$scope.emg_type,$scope.emg_recv_mode,$scope.emg_desc,$scope.emg_location,$scope.resp_start_time,$scope.est_time_reach,$scope.reaching_time,$scope.closing_time,$scope.cust_remark,$scope.cur_resp_stage).success(function (result) {
      if (result) {
        alert("Add emergency Cases Successfully" );
        window.location = '/tracking/' ;
      }
      else{
        alert("error");
      }
    })
   };
   $scope.emergencyDetailsData = function () {
    $rootScope.emergencyDetails = {};
    emergencyCasesService.emergencyDetailsData().success(function (result) {
      if (result) {
        $rootScope.emergencyDetails = result;
        $rootScope.total = $rootScope.emergencyDetails.length;
        angular.forEach($rootScope.emergencyDetails, function (element) {
         $scope.emergencyDetailsvalue = element;
        
        });
        
      }
    });
  };
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
  $scope.monitoringdata = function () {
    $scope.monitoringDetails = {};
    emergencyCasesService.monitoringdata().success(function (result) {  
      if (result) {
        $scope.monitoringDetails = result;
        angular.forEach($scope.monitoringDetails, function (element) {
         $rootScope.monitoringvalue = element;
        //  if($rootScope.monitoringvalue.flag_monitoring == 1){
        //    $scope.flagdata = "Done";
        //  }
        //   else{
        //     $scope.flagdata = "Activated";
        //   }
        })
      }
    });
  };
  $scope.pagerefresh = function(){
    window.location = '/tracking/'
  };
  
  $scope.assigndatavalue = function(emg_case_no){
    $scope.assigndataDetails = {};
    // $rootScope.emrgdataId = emg_case_no;
    emergencyCasesService.assigndatavalue(emg_case_no).success(function (result) {
      if (result) {
        $rootScope.assigndataDetails = result;
       
      }
    });
  };
  $scope.getResponderData = function () {
    // $scope.customerDetailsdata = [];
    $rootScope.responderDetails = {};
    emergencyCasesService.getResponderData().success(function (result) {
     
      if (result) {
       
        $rootScope.responderDetails = result;
       
        angular.forEach($rootScope.responderDetails, function (element) {
        //  alert(element)
         $rootScope.respondervalue = element;
         
        //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
        })
       
      }
     
    });
  };
$scope.responderdata =
  {
    emg_id:"",
    rsp_id:"",
    responderId: "",
    emg_case_no:"",
    emg_date_time:"",
    cust_name:"",
    emg_location:"",
    cust_mob:"",
    emg_type :"",
    emg_desc:"",
    res_mob:"",
    emg_msg:""
 }
 $scope.assignResponderData = function (){
   $scope.emg_case_no = $scope.assigndataDetails[0].emg_case_no;
   $scope.emg_date_time = $scope.assigndataDetails[0].emg_date_time;
   $scope.cust_name = $scope.assigndataDetails[0].cust_name;
   $scope.cust_id = $scope.assigndataDetails[0].cust_id;
   $scope.emg_location = $scope.assigndataDetails[0].emg_location;
   $scope.cust_mob =$scope.assigndataDetails[0].cust_mob;
   $scope.emg_type = $scope.assigndataDetails[0].emg_type;
   $scope.emg_desc = $scope.assigndataDetails[0].emg_desc;
   $scope.emg_id = $rootScope.assigndataDetails[0].emg_id;
   $scope.rsp_id = $scope.responderdata.responderId.rsp_id;
   $scope.comm_id = $scope.responderdata.responderId.comm_id;
   $scope.res_mob = $scope.responderdata.responderId.res_mob;
   $scope.emg_msg = $scope.assigndataDetails[0].emg_msg;
   emergencyCasesService.assignResponderData($scope.emg_case_no,$scope.emg_date_time,$scope.cust_name,$scope.cust_id,$scope.emg_location,$scope.cust_mob,$scope.emg_type, $scope.emg_desc,$scope.emg_id,$scope.rsp_id,$scope.comm_id,$scope.res_mob,$scope.emg_msg).success(function (result) {
    if (result) {
      alert("Assign Successfully" );
      
    }
    else{
      alert("error");
    }
  })
 }
    };

    emergencyCasesController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('emergencyCasesController', emergencyCasesController)
  })();