'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var addNurseController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    addNurseController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addNurseController', addNurseController)
  })();