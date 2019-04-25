'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var summaryAddCareGiverController = function ($scope,$rootScope,$location) {


    $scope.clicked = function(){
      alert("New CareGiver Added");
  }
    };

    summaryAddCareGiverController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('summaryAddCareGiverController', summaryAddCareGiverController)
  })();