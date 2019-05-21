'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var managerController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    managerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('managerController', managerController)
  })();