/**
 * Created by root on 18/4/19.
 */
(function () {
  var injectParams = ['$scope',  '$rootScope', '$window', '$location'];
  var mainController = function ($scope, $rootScope, $window, $location) {
    

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
