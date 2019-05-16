/**
 * Created by root on 18/4/19.
 */
(function () {
  var injectParams = ['$scope',  '$rootScope', '$window', '$location','$http','mainService'];
  var mainController = function ($scope, $rootScope, $window, $location,  $http, mainService) {
    

    //testing-->
    $scope.testing = function () {
      mainService.testing().success(function (results) {
        if (results) { 
          ($scope.titile = results) ;
         
        }
        else {
          // DebugService.logData(result.statusMessage);
        }
      });
    };

    //testing -->

    


  };
  mainController.$inject = injectParams;
  angular.module('seniorApp').controller('mainController', mainController);
}());
