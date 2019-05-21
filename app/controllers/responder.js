'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var responderController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    responderController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('responderController', responderController)
  })();