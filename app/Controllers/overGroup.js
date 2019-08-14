'use strict';

(function () {

    var injectParams = ['$scope','$rootScope','$location'];
    var overGroupController = function ($scope,$rootScope,$location) {

    };

    overGroupController.$inject = injectParams;
    angular.module('CASA')
        .controller('overGroupController', overGroupController)
})();