/**
 * Created by root on 25/5/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var monitoringService = function ($http,$rootScope) {
      // var serviceBase = "http://localhost:3000";
      var factory = {};
      
    /***************** *************************************
     functionName:emergencyCases
     inputJSON:
     outputJSON:
     Description:
     UseIn:emergencyCasesController
     OwnerName:Sushma
     Date:

     *******************************************************/


      factory.monitoringdata = function () {
     
        return $http.get("http://13.233.7.113:5000/api/get/proce_comp")
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };
      factory.getRemark = function (remarkId) {
        var serviceInput = {};
        serviceInput.remarkId = remarkId;
        return $http.get("http://13.233.7.113:5000/api/get/remarks/emrg/" + remarkId ,serviceInput)
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };
      
      factory.viewdata = function (emg_id) {
        var serviceInput = {};
        serviceInput.emg_id = emg_id;
        return $http.get("http://13.233.7.113:5000/api/get/proce_comp/" + emg_id ,serviceInput)
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };
      factory.addRemark = function (emg_id,remark,r_user) {
        var serviceInput = {};
        serviceInput.emg_id = emg_id;
        serviceInput.remark = remark;
       
        serviceInput.r_user = r_user;
        
      return $http.post("http://13.233.7.113:5000/api/post/remarks/emrg",serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
   
      return factory;
    };
    monitoringService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('monitoringService',monitoringService);
  })();