'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var customerController = function ($scope,$rootScope,$location) {


    $scope.clicked = function(){
      alert("Clicked");
  }
    };

    customerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('customerController', customerController)
  })();