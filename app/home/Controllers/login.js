/**
 * Created by root on 24/07/2019.
 */
(function () {
    var injectParams = ['$scope','$rootScope','$window','$location','$http','LocalStorageService','loginService'];
    var loginController = function ($scope,$rootScope,$window,$location,$http,LocalStorageService,loginService) {

        /***************** *************************************
         functionName:login
         inputJSON:email_id,password
         outputJSON:
         Description:
         UseIn:loginController
         MadeBy:Sushma Shukla
         Date: 24/07/2019

         *******************************************************/

        $scope.login = function () {
            $scope.email_id = ($scope.email_id);
            $scope.password = ($scope.password);
             if($scope.email_id == "sushma@gmail.com"){
                 $scope.user_id = 1;
             }
             else{
                 $scope.user_id = 2;
             }
            loginService.login($scope.user_id).success(function (result) {
                if (result) {
                    // LocalStorageService.set('emailId',$scope.user_id);
                    // LocalStorageService.set('EmailIdData',$scope.email);
                    //
                    // LocalStorageService.set('data',result);

                    // window.location = '../../../Admin/';
                }
                else{
                    alert("Wrong Emaild and Password");
                }
            });
            // window.location = '../../../Admin/';
        };
        $scope.loginEmailData = function () {
            $scope.email = ($scope.email_id);
            $scope.password = ($scope.password);
            if($scope.email_id == "sushma@gmail.com"){
                $scope.user_id = 1;
            }
            else{
                $scope.user_id = 2;
            }
            loginService.loginEmailData($scope.email,$scope.password).success(function (result) {
                if (result) {
                    $scope.messagedata1 = result;
                    // LocalStorageService.set('data',result);
                    if($scope.messagedata1.message == "You are login" ){
                        LocalStorageService.set('emailId',$scope.user_id);
                        LocalStorageService.set('EmailIdData',$scope.email);
                        LocalStorageService.set('data',result);
                        $scope.getToken();
                        // window.location = '../../../Admin/';
                    }
                }
                else{
                    alert("Wrong Emaild and Password");
                }
            });
        };
        /***************** *************************************
         functionName:
         inputJSON:
         outputJSON:
         Description:
         UseIn:
         MadeBy:Sushma Shukla
         Date:

         *******************************************************/
        $scope.getToken = function () {
            $scope.email = ($scope.email_id);
            $scope.password = ($scope.password);
            if($scope.email_id == "sushma@gmail.com"){
                $scope.user_id = 1;
            }
            else{
                $scope.user_id = 2;
            }
            loginService.getToken($scope.email,$scope.password).success(function (result) {
                if (result) {
                    $scope.token = result;
                    LocalStorageService.set('token',result.token);
                    window.location = '../../../Admin/';
                }
                else{
                    alert("Wrong Emaild and Password");
                }
            });
        };
    };
    loginController.$inject = injectParams;
    angular.module('CASA').controller('loginController', loginController);
}());
