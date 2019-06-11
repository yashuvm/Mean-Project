'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var customerDetailController = function ($scope,$rootScope,$location) {


    $scope.clicked = function(){
      alert("Clicked");
  }
  
    };

    customerDetailController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('customerDetailController', customerDetailController)
  })();