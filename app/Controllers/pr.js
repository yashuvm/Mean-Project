'use strict';

(function () {

    var injectParams = ['$scope','$rootScope','$location'];
    var prController = function ($scope,$rootScope,$location) {

    };

    prController.$inject = injectParams;
    angular.module('CASA')
        .controller('prController', prController)
})();