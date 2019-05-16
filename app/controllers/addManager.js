'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var addManagerController = function ($scope,$rootScope,$location) {


    $scope.clicked = function(){
      alert("Manager Added Successfully");
  }
    };

    addManagerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addManagerController', addManagerController)
  })();