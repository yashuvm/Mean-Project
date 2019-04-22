'use strict';

(function () {

  var injectParams = ['$scope','$rootScope', 'LocalStorageService','$location'];
  var customerDetailController = function ($scope,$rootScope,LocalStorageService,$location) {


    $scope.clicked = function(){
      alert("Clicked");
  }
    };

    customerDetailController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('customerDetailController', customerDetailController)
  })();