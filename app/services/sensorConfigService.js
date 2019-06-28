/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var sensorConfigService = function ($http,$rootScope) {
      // var serviceBase = "http://localhost:3000";
      var factory = {};
      
    /***************** *************************************
     functionName:custmerDetails
     inputJSON:
     outputJSON:
     Description:
     UseIn:mainController
     OwnerName:Sushma
     Date:

     *******************************************************/

    factory.custmerDetails = function () {
     
      return $http.get("http://13.233.7.113:5000/api/customer/details")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
    factory.getSensorConfigData = function () {
     
      return $http.get("http://13.233.7.113:5000/api/get/sensor_config")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
    factory.addSensorConfig = function (cust_id,sensor_no,alert_msg,alert_type,alert_location) {
      var serviceInput = {};
      serviceInput.cust_id = cust_id;
      serviceInput.sensor_no = sensor_no;
      serviceInput.alert_msg = alert_msg;
      serviceInput.alert_type = alert_type;
      serviceInput.alert_location = alert_location;

    return $http.post("http://13.233.7.113:5000/api/post/add/sensor_config",serviceInput)
      .success(function (results) {
        return results;
      })
      .error(function (data) {
        alert('Connection Problem');
      });
  };
      return factory;
    };
    sensorConfigService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('sensorConfigService', sensorConfigService);
  })();