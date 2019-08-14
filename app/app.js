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

            .when('/logout', {
                resolve: {
                    deadResolve: function($window) {
                        sessionStorage.removeItem('emailId');
                        sessionStorage.removeItem('EmailIdData');
                        sessionStorage.removeItem('data');

                        $window.location = "../";
                    }
                }
            })
            .when("/Admin/", {
                resolve: {
                    check: function($window) {
                        if(!!sessionStorage.getItem('emailId')==false || !!sessionStorage.getItem('EmailIdData')==false || !!sessionStorage.getItem('data')==false)  {
                            // console.log(sessionStorage.getItem('emailMobile'));
                            $window.location = "../";
                        }
                    },
                },
                controller: 'baseController',
                templateUrl:  viewBase + 'base.html'
            })

            .when("/Admin/hotel/", {
                resolve: {
                    check: function($window) {
                        if(!!sessionStorage.getItem('emailId')==false || !!sessionStorage.getItem('EmailIdData')==false || !!sessionStorage.getItem('data')==false)  {
                            // console.log(sessionStorage.getItem('emailMobile'));
                            $window.location = "../";
                        }
                    },
                },
                controller: 'hotelController',
                templateUrl:  viewBase + 'hotel.html'
            })
            .when("/Admin/employee/", {
                resolve: {
                    check: function($window) {
                        if(!!sessionStorage.getItem('emailId')==false || !!sessionStorage.getItem('EmailIdData')==false || !!sessionStorage.getItem('data')==false)  {
                            // console.log(sessionStorage.getItem('emailMobile'));
                            $window.location = "../";
                        }
                    },
                },
                controller: 'employeeController',
                templateUrl:  viewBase + 'employee.html'
            })
            .when("/Admin/article/", {
                resolve: {
                    check: function($window) {
                        if(!!sessionStorage.getItem('emailId')==false || !!sessionStorage.getItem('EmailIdData')==false || !!sessionStorage.getItem('data')==false)  {
                            // console.log(sessionStorage.getItem('emailMobile'));
                            $window.location = "../";
                        }
                    },
                },
                controller: 'articleController',
                templateUrl:  viewBase + 'article.html'
            })
            .when("/Admin/overGroup/", {
                resolve: {
                    check: function($window) {
                        if(!!sessionStorage.getItem('emailId')==false || !!sessionStorage.getItem('EmailIdData')==false || !!sessionStorage.getItem('data')==false)  {
                            // console.log(sessionStorage.getItem('emailMobile'));
                            $window.location = "../";
                        }
                    },
                },
                controller: 'overGroupController',
                templateUrl:  viewBase + 'overGroup.html'
            })
            .when("/Admin/majorGroup/", {
                resolve: {
                    check: function($window) {
                        if(!!sessionStorage.getItem('emailId')==false || !!sessionStorage.getItem('EmailIdData')==false || !!sessionStorage.getItem('data')==false)  {
                            // console.log(sessionStorage.getItem('emailMobile'));
                            $window.location = "../";
                        }
                    },
                },
                controller: 'majorGroupController',
                templateUrl:  viewBase + 'majorGroup.html'
            })
            // routing
    }])

.run(["$rootScope","$window",'$location','$timeout', function ($rootScope, $window, $location,$timeout) {



}]);
// module
