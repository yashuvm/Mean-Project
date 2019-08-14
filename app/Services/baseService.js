/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var baseService = function ($http,$rootScope) {
        // var serviceBase = "http://localhost:3000";
        var factory = {};
        $http.defaults.headers.common.Authorization = 'Bearear ayJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImNhc2EifSwiaWF0IjoxNTY1Njg1OTE3fQ.JpYlEnGEW4rDk6OLkXW7g6NRT8I52Tz_xjd8qHlnIkI';
        /***************** *************************************
         functionName:testing
         inputJSON:
         outputJSON:
         Description:
         UseIn:mainController
         OwnerName:Sushma
         Date:

         *******************************************************/

        factory.subsystemdata = function (dataId) {
            return $http.get("http://13.235.121.167:5000/all/subsystem/" + dataId)
                .success(function (results) {
                    return results;
                })
                .error(function (data) {
                    alert('Connection Problem');
                });
        };
        factory.tokendata = function (headers) {
            return $http.get("http://13.235.121.167:5000/api/get_over_group/fields")
                .success(function (results) {
                    return results;
                })
                .error(function (data) {
                    alert('Connection Problem');
                });
        };
        factory.submoduledefaultdata = function (mainId) {
            return $http.get("http://13.235.121.167:5000/get/module/" + mainId)
                .success(function (results) {
                    return results;
                })
                .error(function (data) {
                    alert('Connection Problem');
                });
        };
        factory.systembuttondata2 = function (mainId2,subsystem_iddata2) {
            return $http.get("http://13.235.121.167:5000/get/module/" + mainId2 + "/" + subsystem_iddata2)
                .success(function (results) {
                    return results;
                })
                .error(function (data) {
                    alert('Connection Problem');
                });
        };
        factory.submodule = function (mainId) {
            return $http.get("http://13.235.121.167:5000/submodules/" + mainId)
                .success(function (results) {
                    return results;
                })
                .error(function (data) {
                    alert('Connection Problem');
                });
        };
        factory.getModuleId = function (userId,module_id) {
            return $http.get("http://13.235.121.167:5000/modules/submodules/" + userId + "/" + module_id)
                .success(function (results) {
                    return results;
                })
                .error(function (data) {
                    alert('Connection Problem');
                });
        };
        return factory;
    };
    baseService.$inject = injectParams;
    angular.module('CASA')
        .factory('baseService', baseService);
})();

