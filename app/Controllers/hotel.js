'use strict';

(function () {

    var injectParams = ['$scope','$rootScope','$location'];
    var hotelController = function ($scope,$rootScope,$location) {

    };

    hotelController.$inject = injectParams;
    angular.module('CASA')
        .controller('hotelController', hotelController)
})();