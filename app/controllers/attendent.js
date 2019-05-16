'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var attendentController = function ($scope,$rootScope,$location) {


//     $scope.clicked = function(){
//       alert("Clicked");
//   }
    };

    attendentController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('attendentController', attendentController)
  })();