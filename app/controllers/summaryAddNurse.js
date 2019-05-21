'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var summaryAddNurseController = function ($scope,$rootScope,$location) {


    $scope.clickeddata = function(){
      alert("New Nurse Added");
  }
    };

    summaryAddNurseController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('summaryAddNurseController', summaryAddNurseController)
  })();