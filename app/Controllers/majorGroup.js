'use strict';

(function () {

    var injectParams = ['$scope','$rootScope','$location','majorGroupService'];
    var majorGroupController = function ($scope,$rootScope,$location,majorGroupService) {

        /***************** *************************************
         functionName:addMajorGroup
         inputJSON:major_grp_name,over_grp_id,sales_tax_rate,beverage_tax_rate,service_charge,assigned_to,major_grp_status
         outputJSON:email_id,password,roll_id
         Description:
         UseIn:majorGroupController
         MadeBy:Ravi Kumar
         Date: 13/08/2019

         *******************************************************/


        $scope.addMajorGroup= function(){
            $scope.major_grp_name = $scope.majorGroupName;
            $scope.over_grp_id = $scope.overGroupID.over_grp_id;
            $scope.sales_tax_rate = $scope.salesTaxRate;
            $scope.beverage_tax_rate = $scope.beverageTaxRate;
            $scope.service_charge = $scope.serviceCharge;
            $scope.assigned_to = $scope.assignedTo;
            $scope.major_grp_status = $scope.majorGrpStatus;
            majorGroupService.addMajorGroupData($scope.major_grp_name, $scope.over_grp_id,$scope.sales_tax_rate,$scope.beverage_tax_rate,$scope.service_charge,$scope.assigned_to,$scope.major_grp_status).success(function (result) {
                if (result) {
                  alert("Add Major Group Successfully" );
                  window.location = '/tracking/' ;
                }
                else{
                  alert("error");
                }
            });
        };

        /***************** *************************************
         functionName:getOverGroupName
         inputJSON:
         outputJSON:
         Description:
         UseIn:majorGroupController
         MadeBy:Ravi Kumar
         Date: 13/08/2019

         *******************************************************/
        $scope.getOverGroup = function(){
            $scope.overGroupData = {}
            majorGroupService.getOverGroup().success(function (result) {
               if(result){
                $scope.overGroupData = result;
                // console.log(result)
               }
            })
        };

    };

    majorGroupController.$inject = injectParams;
    angular.module('CASA')
        .controller('majorGroupController', majorGroupController)
})();