'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter', 'monitoringService'];
  var monitoringController = function ($scope,$rootScope,$location,$filter,monitoringService) {

    $scope.show = false;

    $scope.on = function(){
      $scope.show = true;
    }
 
    $scope.off = function(){
      $scope.show = false;
    } 
 
    $scope.showButton = function(){
      return $scope.show;
    }
// $scope.flagdatavalue = "Activated";
$scope.flag = {
  date:""
}
$scope.buttonActivation2 = function(){
  $scope.flagvalue = 2 ;
  $rootScope.emgValue =  $rootScope.emg;
  $scope.datetime = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
  // $scope.hhmmsstt = $filter('date')(new Date(), 'hh:mm:ss a'); 
  $scope.flag.date =  $scope.datetime;
  $scope.date =  $scope.flag.date;
  monitoringService.buttonActivation($scope.emgValue,$scope.date,$scope.flagvalue).success(function (result) {
    if (result == "success") {
      $scope.flagdatavalue = "Done";
      $scope.getFlagValue($scope.emgValue);
      // $scope.disabled = true;
      // $scope.disabled1 = false;
      // $scope.disabled2 = true;
      // $scope.disabled3 = true;
      // $scope.disabled4 = true;
    };  
  });
};
 
// $scope.btn2 = function(){

//   if($rootScope.flagValue1 == 2){
//     $scope.disabled = true;
//   }
// }
// $scope.btn3 = function(){
//     if($rootScope.flagValue1 == 3){
//       $scope.disabled1 = true;
//       $scope.disabled = true;
//     }
//   };
//   $scope.btn4 = function(){
//       if($rootScope.flagValue1 == 4){
//         $scope.disabled2 = true;
//         $scope.disabled1 = true;
//         $scope.disabled = true;
//       }
//     }
//     $scope.btn5 = function(){
//         if($rootScope.flagValue1 == 5){
//           $scope.disabled3 = true;
//           $scope.disabled1 = true;
//           $scope.disabled2 = true;
//           $scope.disabled = true;
//         }
//       }
//       $scope.btn6 = function(){
//           if($rootScope.flagValue1 == 6){
//             $scope.disabled4 = true;
//             $scope.disabled1 = true;
//             $scope.disabled2 = true;
//             $scope.disabled3 = true;
//             $scope.disabled = true;
//           }
//         }
$scope.getFlagValue = function(emg_id){
  $rootScope.emg = emg_id; 
  monitoringService.getFlagValue($scope.emg).success(function (result) {
    if (result) {
      $scope.flag = result;
      $rootScope.flagValue1 = $scope.flag[0].flag_monitoring; 
      $scope.btnEnabler($rootScope.emg); 
      
    }  
  });
};

$scope.btnEnabler = function(emg_id){
    
    // if($rootScope.flagValue1 == 2){
    //   $scope.disabled1 = true;
    //   $scope.disabled2 = false;
    //   $scope.disabled3 = true;
    //   $scope.disabled4 = true;
    //   $scope.disabled5 = true;
    //   }

    // if($rootScope.flagValue1 == 3){
    //   $scope.disabled1 = true;
    //   $scope.disabled2 = true;
    //   $scope.disabled3 = false;
    //   $scope.disabled4 = true;
    //   $scope.disabled5 = true;
    //   }
    // if($rootScope.flagValue1 == 4){
    //   $scope.disabled1 = true;
    //   $scope.disabled2 = true;
    //   $scope.disabled3 = false;
    //   $scope.disabled4 = true;
    //   $scope.disabled5 = true;
    //   }
    // if($rootScope.flagValue1 == 5){
    //   $scope.disabled1 = true;
    //   $scope.disabled2 = true;
    //   $scope.disabled3 = true;
    //   $scope.disabled4 = false;
    //   $scope.disabled5 = true;
    //   }
    // if($rootScope.flagValue1 == 6){
    //   $scope.disabled1 = true;
    //   $scope.disabled2 = true;
    //   $scope.disabled3 = true;
    //   $scope.disabled4 = true;
    //   $scope.disabled5 = false;
    //       }
}

// $scope.flagdatavalue5 = "Activated";
$scope.buttonActivation3 = function(){
  $scope.flagvalue = 3 ;
  $scope.emgValue =  $rootScope.emg; 
  $scope.datetime = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
  // $scope.hhmmsstt = $filter('date')(new Date(), 'hh:mm:ss a'); 
  $scope.flag.date =  $scope.datetime;
  $scope.date =  $scope.flag.date;
  monitoringService.buttonActivation($scope.emg,$scope.date,$scope.flagvalue).success(function (result) {
    if (result == "success") {
      $scope.flagdatavalue = "Done";
      $scope.getFlagValue($scope.emg);
      $scope.disabled = true;
      $scope.disabled1 = true;
      $scope.disabled2 = false;
      $scope.disabled3 = true;
      $scope.disabled4 = true;
    }  
  });
};
$scope.buttonActivation4 = function(){
  $scope.flagvalue = 4 ;
  $scope.emgValue =  $rootScope.emg; 
  $scope.datetime = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
  // $scope.hhmmsstt = $filter('date')(new Date(), 'hh:mm:ss a'); 
  $scope.flag.date =  $scope.datetime;
  $scope.date =  $scope.flag.date;
  monitoringService.buttonActivation($scope.emg,$scope.date,$scope.flagvalue).success(function (result) {
    if (result == "success") {
      $scope.flagdatavalue = "Done";
      $scope.getFlagValue($scope.emg);
      $scope.disabled = true;
      $scope.disabled1 = true;
      $scope.disabled2 = true;
      $scope.disabled3 = false;
      $scope.disabled4 = true;
    }  
  });
};
$scope.buttonActivation5 = function(){
  $scope.flagvalue = 5 ;
  $scope.emgValue =  $rootScope.emg; 
  $scope.datetime = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
  // $scope.hhmmsstt = $filter('date')(new Date(), 'hh:mm:ss a'); 
  $scope.flag.date =  $scope.datetime;
  $scope.date =  $scope.flag.date;
  monitoringService.buttonActivation($scope.emg,$scope.date ,$scope.flagvalue).success(function (result) {
    if (result == "success") {
      $scope.flagdatavalue = "Done";
      $scope.getFlagValue($scope.emg);
      $scope.disabled = true;
      $scope.disabled1 = true;
      $scope.disabled2 = true;
      $scope.disabled3 = true;
      $scope.disabled4 = false;
    }  
  });
};
$scope.buttonActivation6 = function(){
  $scope.flagvalue = 6 ;
  $scope.emgValue =  $rootScope.emg; 
  $scope.datetime = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
  // $scope.hhmmsstt = $filter('date')(new Date(), 'hh:mm:ss a'); 
  $scope.flag.date =  $scope.datetime;
  $scope.date =  $scope.flag.date;
  monitoringService.buttonActivation($scope.emg,$scope.date,$scope.flagvalue).success(function (result) {
    if (result == "success") {
      $scope.flagdatavalue = "Done";
      $scope.getFlagValue($scope.emg);
      $scope.disabled = true;
      $scope.disabled1 = true;
      $scope.disabled2 = true;
      $scope.disabled3 = true;
      $scope.disabled4 = true;
    }  
  });
};

// $scope.buttonActivation6 = function(){
//   $scope.flagvalue = 6 ;
//   $scope.emg = $rootScope.viewId;
//   $scope.flagdatavalue6 = "Activated";
//   monitoringService.buttonActivation($scope.emg,$scope.flagvalue).success(function (result) {
//     if (result == "success") {
//       $scope.flagdatavalue6 = "Done";
//     }
//     else{
//       $scope.flagdatavalue6 = "Activated";
//     }
//   });
// };

  $scope.monitoringdata = function () {
   
    $scope.monitoringDetails = {};
    monitoringService.monitoringdata().success(function (result) {
     
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
  $scope.viewdata = function (emg_id) {
    $rootScope.viewId = emg_id;
    monitoringService.viewdata(emg_id).success(function (result) {  
      if (result) { 
        $rootScope.viewdataDetails = result;
        $rootScope.viewId = $rootScope.viewdataDetails[0].flag_monitoring;
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
    r_datetime:"",
    r_user:"Control Room"
  }
  $scope.addRemark = function () {
    $scope.addRemarkvalue.emg_id = $rootScope.viewId;
    $scope.emg_id = $scope.addRemarkvalue.emg_id;
    $scope.addRemarkvalue.r_datetime = $filter('date')(new Date(),'yyyy-MM-dd HH:mm:ss');
    $scope.hhmmsstt = $filter('date')(new Date(), 'hh:mm:ss a');
    $scope.r_datetime = $scope.addRemarkvalue.r_datetime;
    $scope.remark = $scope.addRemarkvalue.remark;
    $scope.r_user = $scope.addRemarkvalue.r_user;
    monitoringService.addRemark($scope.emg_id, $scope.r_datetime,$scope.remark,$scope.r_user).success(function (result) {  
      if (result == "ok") { 
        $scope.remarkDetails = result;
        // window.location = '/monitoring/#Remark2'
        // $scope.getRemark();
      }
    });
  };
 
 
    };

    monitoringController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('monitoringController',monitoringController)
  })();