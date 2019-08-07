'use strict';

// module
var app = angular.module('CASA', ['ngRoute','ngSanitize','angularUtils.directives.dirPagination','checklist-model','ui.calendar','ui.bootstrap','ui.select']);
app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        // base folder
        var viewBase = '../templates/';
        // base folder

        $routeProvider
            // routing
            .when("/Admin/", {
                controller: 'baseController',
                templateUrl:  viewBase + 'base.html'
            })

            .when("/Admin/base/pr/", {
                controller: 'baseController',
                templateUrl:  viewBase + 'base.html'
            })
            .when("/Admin/hotel/", {
                controller: 'hotelController',
                templateUrl:  viewBase + 'hotel.html'
            })
            .when("/Admin/employee/", {
                controller: 'employeeController',
                templateUrl:  viewBase + 'employee.html'
            })
            // routing
    }])

.run(["$rootScope","$window",'$location','$timeout', function ($rootScope, $window, $location,$timeout) {



}]);
// module
