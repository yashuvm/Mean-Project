'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var addAttendentController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    addAttendentController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addAttendentController', addAttendentController)
  })();