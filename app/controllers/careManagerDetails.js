'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$filter','$location'];
  var careManagerDetailController = function ($scope,$rootScope,$filter,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    careManagerDetailController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('careManagerDetailController', careManagerDetailController)
  })();