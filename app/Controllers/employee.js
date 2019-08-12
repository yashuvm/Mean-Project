'use strict';

(function () {

    var injectParams = ['$scope','$rootScope','$location'];
    var employeeController = function ($scope,$rootScope,$location) {

    };

    employeeController.$inject = injectParams;
    angular.module('CASA')
        .controller('employeeController', employeeController)
})();