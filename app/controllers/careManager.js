'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var careManagerController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    careManagerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('careManagerController', careManagerController)
  })();