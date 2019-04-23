'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var registrationController = function ($scope,$rootScope,$location) {


    $scope.clicked = function(){
      alert("Confirm Registration");
  }
    };

    registrationController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('registrationController', registrationController)
  })();