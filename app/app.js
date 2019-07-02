'use strict';


var app = angular.module('seniorApp', ['ngRoute','ngSanitize','angular-md5','angularUtils.directives.dirPagination','checklist-model', 'ui.calendar', 'ui.bootstrap','ui.select']);
app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    
    var viewBase = '../templates/';

    
    $routeProvider
      .when("/dataAdmin/", {
        controller: 'mainController',
        templateUrl:  viewBase + 'basetpl.html'  
      })
      .when("/homeCareRegistration/", {
        controller: 'homeCareRegistrationController',
        templateUrl: viewBase + 'homeCareRegistration.html'
      })
      .when("/comprehensivePackageRegistration/", {
        controller: 'comprehensivePackageRegistrationController',
        templateUrl: viewBase + 'comprehensivePackageRegistration.html'
      })
      .when("/customer/", {
        controller: 'customerController',
        templateUrl: viewBase + 'customer.html'
      })
      .when("/monitoring/", {
        controller: 'monitoringController',
        templateUrl: viewBase + 'monitoring.html'
      })
      .when("/manager/regionManagerDetail/editRegionManager", {
        controller: 'editRegionManagerController',
        templateUrl: viewBase + 'editRegionManager.html'
      })
      .when("/manager/communityManagerDetail/editCommunityManager/", {
        controller: 'editCommunityManagerController',
        templateUrl: viewBase + 'editcommunityManager.html'
      })
      .when("/manager/clusterManagerDetail/editclusterManager/", {
        controller: 'editclusterManagerController',
        templateUrl: viewBase + 'editclusterManager.html'
      })
      .when("/manager/clusterManagerDetail/:clm_id", {
        controller: 'clusterManagerDetailController',
        templateUrl: viewBase + 'clusterManagerDetail.html'
      })
      .when("/manager/regionManagerDetail/:rm_id", {
        controller: 'regionManagerDetailController',
        templateUrl: viewBase + 'regionManagerDetail.html'
      })
      .when("/manager/communityManagerDetail/:cm_id", {
        controller: 'communityManagerDetailController',
        templateUrl: viewBase + 'communityManagerDetail.html'
      })
      .when("/customer/customerDetail/:cust_id", {
        controller: 'customerDetailController',
        templateUrl: viewBase + 'customerDetail.html'
      })
      .when("/customer/customerdetails/editCustomerDetails", {
        controller: 'editCustomerDetailsController',
        templateUrl: viewBase + 'editCustomerdetails.html'
      })
      .when("/customer/customerRecord/", {
        controller: 'customerRecordController',
        templateUrl: viewBase + 'customerRecord.html'
      })
      .when("/careManager/", {
        controller: 'careManagerController',
        templateUrl: viewBase + 'careManager.html'
      })
      .when("/customer/addCustomer", {
        controller: 'addCustomerController',
        templateUrl: viewBase + 'addCustomer.html'
      })
      
      .when("/careManager/careManagerDetail/editcareManagerDetail/", {
        controller: 'editCareManagerController',
        templateUrl: viewBase + 'editCareManagerDetail.html'
      })
      .when("/careManager/careManagerDetail/:crm_id", {
        controller: 'careManagerDetailController',
        templateUrl: viewBase + 'careManagerDetails.html'
      })
      .when("/emergency_cases/emergency_cases_detail/:emg_case_no", {
        controller: 'emergencycaseDetailController',
        templateUrl: viewBase + 'emergencycaseDetail.html'
      })
      // .when("/careManager/careManagerSetting/", {
      //   controller: 'careManagerSettingController',
      //   templateUrl: viewBase + 'careManagerSettings.html'
      // })
      .when("/careManager/addCareManager/", {
        controller: 'addCareManagerController',
        templateUrl: viewBase + 'addCareManager.html'
      })
      .when("/careManager/addCareManager/summaryAddCareManager/", {
        controller: 'summaryAddCareManagerController',
        templateUrl: viewBase + 'summaryAddCareManager.html'
      })
      .when("/responder/", {
        controller: 'responderController',
        templateUrl: viewBase + 'responder.html'
      })
      .when("/responder/responderDetails/", {
        controller: 'responderDetailsController',
        templateUrl: viewBase + 'responderDetails.html'
      })
      .when("/responder/addResponder/", {
        controller: 'addResponderController',
        templateUrl: viewBase + 'addResponder.html'
      })
      .when("/responder/addResponder/summaryAddResponder/", {
        controller: 'summaryAddResponderController',
        templateUrl: viewBase + 'summaryAddResponder.html'
      })
      .when("/nurse/", {
        controller: 'nurseController',
        templateUrl: viewBase + 'nurse.html'
      })
      .when("/nurse/nurseDetails/", {
        controller: 'nurseDetailsController',
        templateUrl: viewBase + 'nurseDetails.html'
      })
      .when("/nurse/addNurse/", {
        controller: 'addNurseController',
        templateUrl: viewBase + 'addNurse.html'
      })
      .when("/nurse/addNurse/summaryAddNurse/", {
        controller: 'summaryAddNurseController',
        templateUrl: viewBase + 'summaryAddNurse.html'
      })
      .when("/attendent/", {
        controller: 'attendentController',
        templateUrl: viewBase + 'attendent.html'
      })
      .when("/attendent/attendentDetails/", {
        controller: 'attendentDetailsController',
        templateUrl: viewBase + 'attendentDetails.html'
      })
      .when("/attendent/addAttendent/", {
        controller: 'addAttendentController',
        templateUrl: viewBase + 'addAttendent.html'
      })
      .when("/attendent/addAttendent/summaryAddAttendent/", {
        controller: 'summaryAddAttendentController',
        templateUrl: viewBase + 'summaryAddAttendent.html'
      })

      .when("/duallist/", {
        controller: 'duallistController',
        templateUrl: viewBase + 'duallist.html'
      })
      
      .when("/sensorConfig/", {
        controller: 'sensorConfigController',
        templateUrl: viewBase + 'sensorConfig.html'
      })
      .when("/emergency_cases/", {
        controller: 'emergencyCasesController',
        templateUrl: viewBase + 'emergencyCases.html'
      })
      .when("/assignDuty/", {
        controller: 'assignDutyController',
        templateUrl: viewBase + 'assignDuty.html'
      })
      .when("/careGiver/", {
        controller: 'careGiverController',
        templateUrl: viewBase + 'careGiver.html'
      })
      .when("/data_admin/", {
        controller: 'dataAdminController',
        templateUrl: viewBase + 'dataAdmin.html'
      })
      .when("/data_admin/adddata_admin/", {
        controller: 'addDataAdminController',
        templateUrl: viewBase + 'addDataAdmin.html'
      })
      .when("/data_admin/data_admin_details", {
        controller: 'dataAdminDetailsController',
        templateUrl: viewBase + 'dataAdminDetails.html'
      })
      .when("/data_admin/data_admin_settings/", {
        controller: 'dataAdminSettingsController',
        templateUrl: viewBase + 'dataAdminSettings.html'
      })
      .when("/manager/", {
        controller: 'managerController',
        templateUrl: viewBase + 'manager.html'
      })
      .when("/homeLogoutMap/", {
        controller: 'homeLogoutMapController',
        templateUrl: viewBase + 'homeLogoutMap.html'
      })
      .when("/manager/add_Region_manager/", {
        controller: 'addRegionManagerController',
        templateUrl: viewBase + 'addRegionManager.html'
      })
      .when("/manager/add_Community_Manager/", {
        controller: 'addCommunityManagerController',
        templateUrl: viewBase + 'addCommunityManager.html'
      })
      .when("/manager/add_Care_Coordinator/", {
        controller: 'addCareCoordinatorController',
        templateUrl: viewBase + 'addCareCoordinator.html'
      })
      .when("/manager/manager_details/", {
        controller: 'managerDetailsController',
        templateUrl: viewBase + 'managerDetails.html'
      })
      .when("/zone/", {
        controller: 'zoneController',
        templateUrl: viewBase + 'zone.html'
      })
      .otherwise('/', {
        redirectTo: '/'
    });
      
    }])
    
    .run(["$rootScope","$window", '$location', 'md5','$timeout', function ($rootScope, $window, $location,md5,$timeout) {
    

      
      var socket = io.connect('http://13.233.7.113:5000');
      // console.log(socket);
      //  socket.on('set', function(data)
      //  {
          
          //  console.log(data);
          //  console.log(socket.id);
      //  });
      //  socket.emit('chat',"sushma," );
      //  socket.emit('chat',"sushma," + md5.createHash('abc'));
      //  console.log(md5.createHash('abc'));
      //  socket.on('1', function (data)
      socket.on('admin', function (data)
        {
    
           console.log(data);
          //  console.log(socket.id);
          // alert(JSON.stringify(data));
          swal(JSON.stringify(data));
          // $rootScope.value = JSON.stringify(data) ;
          // function myFunction() {
          //   $rootScope.datavalue = $rootScope.value ;
          // }
         });
         
  
}]);

   