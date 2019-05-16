'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var nurseController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    nurseController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('nurseController', nurseController)
  })();