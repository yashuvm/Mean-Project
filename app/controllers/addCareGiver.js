'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var addCareGiverController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    addCareGiverController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addCareGiverController', addCareGiverController)
  })();