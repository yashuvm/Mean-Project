'use strict';

(function () {

  var injectParams = ['$scope','$rootScope', 'LocalStorageService','$location'];
  var homePageController = function ($scope,$rootScope,LocalStorageService,$location) {


      $scope.isEdit = false;
      $scope.updatePatientIdModel = {
         
          
      };
    };

    homePageController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('homePageController', homePageController)
  })();