/**
 * Created by root on 22/4/19.
 */
(function () {
    var injectParams = ['$http','$rootScope'];
    var overGroupService = function ($http,$rootScope) {
        // var serviceBase = "http://localhost:3000";
        var factory = {};

        // $http.defaults.headers.common.Authorization = 'Bearear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImNhc2EifSwiaWF0IjoxNTY1Njg1OTE3fQ.JpYlEnGEW4rDk6OLkXW7g6NRT8I52Tz_xjd8qHlnIkI';

        /***************** *************************************
         functionName:addOvergroup
         inputJSON:over_grp_name,assigned_to,over_grp_status
         outputJSON:
         Description:
         UseIn:mainController
         OwnerName:Shivam yadav
         Date:13/08/2019

         *******************************************************/
        factory.addOverGroup=function(over_grp_name,assigned_to,over_grp_status,user_id){
            serviceInput={}
            serviceInput.over_grp_name = over_grp_name;
            serviceInput.assigned_to = assigned_to;
            serviceInput.over_grp_status = over_grp_status;
            serviceInput.user_id = user_id;

            return $http.post("http://13.235.121.167:5000/post/over_group",serviceInput)
                .success(function (results) {
                    return results;
                })
                .error(function (data) {
                    alert('Connection Problem');
                });
        };

        /***************** *************************************
         functionName:addOvergroup
         inputJSON:over_grp_name,assigned_to,over_grp_status
         outputJSON:
         Description:
         UseIn:mainController
         OwnerName:Shivam yadav
         Date:13/08/2019

         *******************************************************/
        factory.getOverGroup=function(){


            return $http.get("http://13.235.121.167:5000/api/get_over_group/fields")
                .success(function (results) {
                    return results;
                })
                .error(function (data) {
                    alert('Connection Problem');
                });
        }
        /***************** *************************************
         functionName:DetailsOverGroup
         inputJSON:
         outputJSON:assigned_to,changed_by,changed_date,over_grp_id,over_grp_name,over_grp_status
         Description:
         UseIn:mainController
         OwnerName:Shivam yadav
         Date:13/08/2019

         *******************************************************/

        factory.DetailsOverGroup=function(over_grp_id){

            return $http.get("http://13.235.121.167:5000/api/get_over_group/fields/" + over_grp_id)
                .success(function (results) {
                    return results;
                })
                .error(function (data) {
                    alert('Connection Problem');
                });
        }
        /***************** *************************************
         functionName:OvergroupEdit
         inputJSON:
         outputJSON:over_grp_name,assigned_to,
         Description:
         UseIn:
         OwnerName:Shivam yadav
         Date:13/08/2019

         *******************************************************/
        factory.UpdateOvergroup = function(over_grp_id,over_grp_name,assigned_to,user_id){
            serviceInput={}
            serviceInput.over_grp_name=over_grp_name;
            serviceInput.assigned_to=assigned_to;
            serviceInput.user_id=user_id;


            return $http.put("http://13.235.121.167:5000/api/update/overgroup/" + over_grp_id,serviceInput)
                .success(function (results) {
                    return results;
                })
                .error(function (data) {
                    alert('Connection Problem');
                });
        };

        /***************** *************************************
         functionName:updateStatus
         inputJSON:over_grp_status
         outputJSON:
         Description:
         UseIn:
         OwnerName:Shivam yadav
         Date:13/08/2019

         *******************************************************/
        factory.UpdateStatus = function(over_grp_id,over_grp_status,user_id){
            serviceInput={}
            serviceInput.over_grp_status=over_grp_status;
            serviceInput.user_id=user_id;


            return $http.put("http://13.235.121.167:5000/api/update/status/overgroup/" + over_grp_id,serviceInput)
                .success(function (results) {
                    return results;
                })
                .error(function (data) {
                    alert('Connection Problem');
                });
        };




        return factory;
    };
    overGroupService.$inject = injectParams;
    angular.module('CASA')
        .factory('overGroupService', overGroupService);
})();

