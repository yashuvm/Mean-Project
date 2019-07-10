'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var responderDetailsController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    responderDetailsController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('responderDetailsController', responderDetailsController)
  })();