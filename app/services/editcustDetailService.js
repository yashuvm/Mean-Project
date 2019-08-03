(function () {
    var injectParams = ['$http','$rootScope'];
    var editcustDetailService= function ($http,$rootScope) {
    
      var factory = {};
    
    factory.updateCustData = function(cust_id,cust_code,cust_name,cust_mob,cust_email,cust_address,comm_id,alert_mob,pri_emg_name,pri_emg_mob,cust_status) {
        var serviceInput = {};
        // serviceInput.cust_id =cust_id;
        serviceInput.cust_code=cust_code;
        serviceInput.cust_name=cust_name;
        serviceInput.cust_mob=cust_mob;
        serviceInput.cust_email=cust_email;
        serviceInput.cust_address=cust_address;
        serviceInput.comm_id=comm_id;
        serviceInput.alert_mob=alert_mob;
        serviceInput.pri_emg_name=pri_emg_name;
        serviceInput.pri_emg_mob=pri_emg_mob;
        serviceInput.cust_status=cust_status;
        
        return $http.put("http://13.233.7.113:5000/api/update/customer/" + cust_id,serviceInput)
        .success(function (results) {
          return results;
        })
        .error(function (data) {
          alert('Error');
        });
      };
   
      return factory;
    };
    editcustDetailService.$inject = injectParams;
    angular.module('seniorApp')
      .factory('editcustDetailService',editcustDetailService);
  })();