/**
 * Created by root on 25/5/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var emergencyCasesService = function ($http,$rootScope) {
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


      factory.customerData = function () {
     
        return $http.get("http://13.233.7.113:5000/api/emrg/customer_details")
          .success(function (results) {
            return results;
          })
          .error(function (data) {
            alert('Connection Problem');
          });
      };
      factory.assignEmergencyData = function (cust_id,emg_msg,emg_status,emg_type,emg_recv_mode,emg_desc,emg_location,resp_start_time,est_time_reach,reaching_time,closing_time,cust_remark,cur_resp_stage) {
        var serviceInput = {};
        serviceInput.cust_id = cust_id;
        serviceInput.emg_msg = emg_msg;
        serviceInput.emg_status = emg_status;
        serviceInput.emg_type = emg_type;
        serviceInput.emg_recv_mode = emg_recv_mode;
        serviceInput.emg_desc = emg_desc;
        serviceInput.emg_location = emg_location;
        serviceInput.resp_start_time = resp_start_time;
        serviceInput.est_time_reach = est_time_reach;
        serviceInput.reaching_time = reaching_time;
        serviceInput.closing_time = closing_time;
        serviceInput.cust_remark = cust_remark;
        serviceInput.cur_resp_stage = cur_resp_stage;

      return $http.post("http://13.233.7.113:5000/api/emrg/add/customer_details",serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
    factory.assignResponderData = function (emg_case_no,emg_date_time,cust_name,cust_id,emg_location,cust_mob,emg_type,emg_desc,emg_id,rsp_id,comm_id,res_mob,emg_msg) {
      var serviceInput = {};
      serviceInput.emg_case_no = emg_case_no;
      serviceInput.emg_date_time = emg_date_time;
      serviceInput.cust_name = cust_name;
      serviceInput.cust_id = cust_id;
      serviceInput.emg_location = emg_location;
      serviceInput.cust_mob = cust_mob;
      serviceInput.emg_type = emg_type;
      serviceInput.emg_desc = emg_desc;
      serviceInput.emg_id = emg_id;
      serviceInput.rsp_id = rsp_id;
      serviceInput.comm_id = comm_id;
      serviceInput.res_mob = res_mob;
      serviceInput.emg_msg = emg_msg;
    

    return $http.post("http://13.233.7.113:5000/api/post/add/responder_emerg",serviceInput)
      .success(function (results) {
        return results;
      })
      .error(function (data) {
        alert('Connection Problem');
      });
  };
    factory.emergencyDetailsData = function () {
     
      // return $http.get("http://13.233.7.113:5000/api/get/emrg")
      //   .success(function (results) {
      //     return results;
      //   })
      //   .error(function (data) {
      //     alert('Connection Problem');
      //   });
      return $http.get("http://13.233.7.113:5000/api/get/emrg")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
    factory.assigndatavalue = function (emg_case_no) {
     
      return $http.get("http://13.233.7.113:5000/api/get/emrg_assigndetails/" + emg_case_no)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
    factory.getResponderData = function () {
     
      return $http.get("http://13.233.7.113:5000/api/get/responder")
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Connection Problem');
        });
    };
      return factory;
    };
    emergencyCasesService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('emergencyCasesService',emergencyCasesService);
  })();