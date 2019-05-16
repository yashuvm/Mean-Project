'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var addResponderController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    addResponderController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addResponderController', addResponderController)
  })();