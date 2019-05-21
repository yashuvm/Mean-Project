/**
 * Created by root on 18/4/19.
 */
(function () {
  var injectParams = ['$scope',  '$rootScope', '$window', '$location','$http','mainService','LocalStorageService'];
  var mainController = function ($scope, $rootScope, $window, $location,  $http, mainService,LocalStorageService) {
    

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
    $scope.loginByAdmin = function(){
      $scope.adminLoginModel = {};
      $scope.adminLoginModel.email = LocalStorageService.get('emailMobile');
      $scope.adminLoginModel.password = LocalStorageService.get('password');
    };
    


  };
  mainController.$inject = injectParams;
  angular.module('seniorApp').controller('mainController', mainController);
}());
