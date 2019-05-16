'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location'];
  var addDataAdminController = function ($scope,$rootScope,$location) {


    $scope.clicked = function(){
      alert("Data Admin Add Successfully");
  }
    };

    addDataAdminController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addDataAdminController', addDataAdminController)
  })();