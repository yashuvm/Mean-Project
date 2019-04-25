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
      .when("/careGiver/", {
        controller: 'careGiverController',
        templateUrl: viewBase + 'careGiver.html'
      })
      .when("/careGiver/careGiverDetail/", {
        controller: 'careGiverDetailController',
        templateUrl: viewBase + 'careGiverDetails.html'
      })
      .when("/careGiver/careGiverRecord/", {
        controller: 'careGiverRecordController',
        templateUrl: viewBase + 'careGiverRecord.html'
      })
      .when("/careGiver/addCareGiver/", {
        controller: 'addCareGiverController',
        templateUrl: viewBase + 'addCareGiver.html'
      })
      .when("/careGiver/addCareGiver/summaryAddCareGiver/", {
        controller: 'summaryAddCareGiverController',
        templateUrl: viewBase + 'summaryAddCareGiver.html'
      })
      
      
      
      
      .otherwise({
        controller: 'errorController',
        templateUrl : viewBase + 'error.html'
      });

      $locationProvider.html5Mode(true);
      
    }]);
   