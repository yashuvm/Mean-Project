/**
 * Created by root on 18/4/19.
 */
(function () {
  var injectParams = ['$scope',  '$rootScope', '$window', '$location','$http','mainService','LocalStorageService','emergencyCasesService','customerService'];
  var mainController = function ($scope, $rootScope, $window, $location,  $http, mainService,LocalStorageService,emergencyCasesService,customerService) {
    

    //testing-->
    // $scope.testing = function () {
    //   mainService.testing().success(function (results) {
    //     if (results) { 
    //       ($scope.titile = results) ;
         
    //     }
    //     else {
       
    //     }
    //   });
    // };

    //testing -->
    
    var that = this;
  
  this.date = {
    value: new Date(),
    showFlag: false
  };
  
  this.openCalendar = function(e, date) {
      that.open[date] = true;
  };
  $rootScope.custmerDetails = function () {
   
    $scope.customerDetailsdata = [];
    $rootScope.customerDetails = {};
    mainService.custmerDetails().success(function (result) {
     
      if (result) {
       
        $rootScope.customerDetails = result;
       
        angular.forEach($rootScope.customerDetails, function (element) {
        //  alert(element)
         $rootScope.customerDetailsvalue = element;
         
        //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
        })
       
      }
     
    });
  };
  $scope.emergencyDetailsData = function () {
   
    $scope.emergencyDetails = {};
    mainService.emergencyDetailsData().success(function (result) {
      if (result) {
        $scope.emergencyDetails = result;
       
        angular.forEach($scope.emergencyDetails, function (element) {
         $scope.emergencyDetailsvalue = element;
        
        }) 
      }
    });
  };
  $scope.emergencyDetailsData = function () {
    $rootScope.emergencyDetails = {};
    emergencyCasesService.emergencyDetailsData().success(function (result) {
      if (result) {
        $rootScope.emergencyDetails = result;
        $rootScope.total = $rootScope.emergencyDetails.length;
        angular.forEach($rootScope.emergencyDetails, function (element) {
         $scope.emergencyDetailsvalue = element;
          // if( $scope.emergencyDetailsvalue.emg_source == "App Button"){
          //   alert($scope.emergencyDetailsvalue.emg_source);
          // }
        }) 
      }
    });
  };
  $rootScope.custmerDetails = function () {
   
    $scope.customerDetailsdata = [];
    $rootScope.customerDetails = {};
    customerService.custmerDetails().success(function (result) {
      if (result) { 
        $rootScope.customerDetails = result;
        $scope.totalCustomer =  $rootScope.customerDetails.length;
      
        angular.forEach($rootScope.customerDetails, function (element) {
        //  alert(element)
         $rootScope.customerDetailsvalue = element;
         
        //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
        })
       
      }
     
    });
  };
  // $scope.add = function(){
  //   swal("Deleted!", "Your imaginary file has been deleted.");
  // };
    $scope.loginByAdmin = function(){
      $scope.adminLoginModel = {};
      $scope.adminLoginModel.email = LocalStorageService.get('emailMobile');
      $scope.adminLoginModel.password = LocalStorageService.get('password');
    };
    


  };
  mainController.$inject = injectParams;
  angular.module('seniorApp').controller('mainController', mainController);
}());
