'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var editresponderController = function ($scope,$rootScope,$location) {
   
    };

    editresponderController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('editresponderController',editresponderController)
  })();