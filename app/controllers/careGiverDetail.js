'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var careGiverDetailController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    careGiverDetailController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('careGiverDetailController', careGiverDetailController)
  })();