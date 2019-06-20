'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var careManagerDetailController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    careManagerDetailController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('careManagerDetailController', careManagerDetailController)
  })();