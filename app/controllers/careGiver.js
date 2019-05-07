'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var careGiverController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    careGiverController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('careGiverController', careGiverController)
  })();