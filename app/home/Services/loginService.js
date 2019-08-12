/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var loginService = function ($http,$rootScope) {
        // var serviceBase = "http://localhost:3000";
        var factory = {};

        /***************** *************************************
         functionName:testing
         inputJSON:
         outputJSON:
         Description:
         UseIn:mainController
         OwnerName:Sushma
         Date:

         *******************************************************/

        factory.login = function (user_id) {
            return $http.get("http://13.235.121.167:5000/mainpage/" + user_id)
                .success(function (results) {
                    return results;
                })
                .error(function (data) {
                    alert('Connection Problem');
                });
        };
        factory.loginEmailData = function (email,password) {
            var serviceInput = {};
            serviceInput.email = email;
            serviceInput.password = password;

            return $http.post("http://13.235.121.167:5000/api/login/casa", serviceInput)
                .success(function (results) {
                    return results;
                })
                .error(function (data) {
                    alert('Connection Problem');
                });
        };

        return factory;
    };
    loginService.$inject = injectParams;
    angular.module('CASA')
        .factory('loginService', loginService);
})();

