/**
 * Created by root on 18/4/19.
 */
(function () {
  var injectParams = ['$scope',  '$rootScope', '$window', '$location','mainService'];
  var mainController = function ($scope, $rootScope, $window, $location,mainService) {
    

    //testing-->
    $scope.testing = function () {
      mainService.testing().success(function (result) {
        if (result.statusCode == 200) { 
         $scope.titile = result ;
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
