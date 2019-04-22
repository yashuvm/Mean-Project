'use strict';

(function () {

  var injectParams = ['$scope','$rootScope', 'LocalStorageService','$location'];
  var customerController = function ($scope,$rootScope,LocalStorageService,$location) {


    $scope.clicked = function(){
      alert("Clicked");
  }
    };

    customerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('customerController', customerController)
  })();