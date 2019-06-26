'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter'];
  var addCustomerController = function ($scope,$rootScope,$location,$filter) {

   

   
 
 $scope.languages = [{
  selected:false,
  name: 'Hindi'
},
{
  selected:false,
  name: 'English'
}];


 };

    addCustomerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('addCustomerController',addCustomerController)
  })();