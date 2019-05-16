'use strict';


var app = angular.module('seniorApp', ['ngRoute','ngSanitize','angular-md5','angularUtils.directives.dirPagination']);
app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    
    var viewBase = '../templates/';

    
    $routeProvider
      .when("/", {
        controller: 'mainController',
        templateUrl:  viewBase + 'basetpl.html'  
      })
      .when("/registration/", {
        controller: 'registrationController',
        templateUrl: viewBase + 'registration.html'
      })
      .when("/customer/", {
        controller: 'customerController',
        templateUrl: viewBase + 'customer.html'
      })
      .when("/customer/customerdetails/", {
        controller: 'customerDetailController',
        templateUrl: viewBase + 'customerdetails.html'
      })
      .when("/customer/customerRecord/", {
        controller: 'customerRecordController',
        templateUrl: viewBase + 'customerRecord.html'
      })
      .when("/careManager/", {
        controller: 'careManagerController',
        templateUrl: viewBase + 'careManager.html'
      })
      .when("/careManager/careManagerDetail/", {
        controller: 'careManagerDetailController',
        templateUrl: viewBase + 'careManagerDetails.html'
      })
      // .when("/careManager/careManagerSetting/", {
      //   controller: 'careManagerSettingController',
      //   templateUrl: viewBase + 'careManagerSettings.html'
      // })
      .when("/careManager/addCareManager/", {
        controller: 'addCareManagerController',
        templateUrl: viewBase + 'addCareManager.html'
      })
      .when("/careGiver/addCareGiver/summaryAddCareGiver/", {
        controller: 'summaryAddCareGiverController',
        templateUrl: viewBase + 'summaryAddCareGiver.html'
      })
      .when("/duallist/", {
        controller: 'duallistController',
        templateUrl: viewBase + 'duallist.html'
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
      .when("/manager/add_manager/", {
        controller: 'addManagerController',
        templateUrl: viewBase + 'addManager.html'
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
    .run(["$rootScope","$window", '$location', 'md5', function ($rootScope, $window, $location,md5) {
    

      
      var socket = io.connect('http://13.234.179.251:5000');
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
      socket.on('3', function (data)
        {
    
           console.log(data);
          //  console.log(socket.id);
          alert(JSON.stringify(data));
        
         });
     
  
}]);

   