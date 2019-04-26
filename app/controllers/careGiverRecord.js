'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var careGiverRecordController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    careGiverRecordController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('careGiverRecordController', careGiverRecordController)
  })();