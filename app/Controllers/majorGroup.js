'use strict';

(function () {

    var injectParams = ['$scope','$rootScope','$location'];
    var majorGroupController = function ($scope,$rootScope,$location) {

    };

    majorGroupController.$inject = injectParams;
    angular.module('CASA')
        .controller('majorGroupController', majorGroupController)
})();