'use strict';


var app = angular.module('seniorApp', ['ngRoute','ngSanitize']);
app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    
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
      
      
      
      
      .otherwise({
        controller: 'errorController',
        templateUrl : viewBase + 'error.html'
      });

      $locationProvider.html5Mode(true);
      
    }]);
   