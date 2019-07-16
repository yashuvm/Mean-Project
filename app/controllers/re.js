'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter'];
  var reController = function ($scope,$rootScope,$location,$filter) {

    };

    reController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('reController', reController)
  })();