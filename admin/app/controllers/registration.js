'use strict';

(function () {

  var injectParams = ['$scope','$rootScope', 'LocalStorageService','$location'];
  var registrationController = function ($scope,$rootScope,LocalStorageService,$location) {


      $scope.isEdit = false;
      $scope.updatePatientIdModel = {
         
          
      };
    };

    registrationController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('registrationController', registrationController)
  })();