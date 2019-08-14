/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var majorGroupService = function ($http,$rootScope) {
        // var serviceBase = "http://localhost:3000";
        var factory = {};
       // $http.defaults.headers.common.Authorization = 'Bearear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImNhc2EifSwiaWF0IjoxNTY1Njg1OTE3fQ.JpYlEnGEW4rDk6OLkXW7g6NRT8I52Tz_xjd8qHlnIkI';
        /***************** *************************************
         functionName:getOverGroupName
         inputJSON:
         outputJSON:
         Description:
         UseIn:mainController
         OwnerName:Sushma
         Date:

         *******************************************************/

        factory.getOverGroup = function () {
            return $http.get("http://13.235.121.167:5000/api/get_over_group/fields")
                .success(function (results) {
                    console.log(results)
                    return results;
                })
                .error(function (data) {
                    alert('Connection Problem');
                });
        };

        /***************** *************************************
         functionName:getOverGroupName
         inputJSON:
         outputJSON:
         Description:
         UseIn:mainController
         OwnerName:Sushma
         Date:

         *******************************************************/
        factory.addMajorGroupData = function (major_grp_name,over_grp_id,sales_tax_rate,beverage_tax_rate,service_charge,assigned_to,major_grp_status) {
            var serviceInput = {};
            serviceInput.major_grp_name = major_grp_name;
            serviceInput.over_grp_id = over_grp_id;
            serviceInput.sales_tax_rate = sales_tax_rate;
            serviceInput.beverage_tax_rate = beverage_tax_rate;
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

        return factory;
    };
    majorGroupService.$inject = injectParams;
    angular.module('CASA')
        .factory('majorGroupService',majorGroupService);
})();

