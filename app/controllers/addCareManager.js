'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var addCareManagerController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    addCareManagerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addCareManagerController', addCareManagerController)
  })();