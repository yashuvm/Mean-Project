'use strict';

(function () {

    var injectParams = ['$scope','$rootScope','$location','overGroupService','LocalStorageService'];
    var overGroupController = function ($scope,$rootScope,$location,overGroupService,LocalStorageService) {

        /***************** *************************************
         functionName:addOvergroup
         inputJSON:over_grp_name,assigned_to,over_grp_status
         outputJSON:
         Description:
         UseIn:mainController
         OwnerName:Shivam yadav
         Date:13/08/2019

         *******************************************************/

        $scope.addOverGroup=function(){
            $scope.over_grp_name = $scope.AddoverGroup;
            $scope.assigned_to = $scope.addAssignedTo;
            $scope.status = $scope.AddStatus;
            if($scope.status == undefined){
                $scope.over_grp_status= "active"
            }
            else{
                $scope.over_grp_status = $scope.status
            }
            $scope.user_id= LocalStorageService.get('emailId');


            overGroupService.addOverGroup($scope.over_grp_name, $scope.assigned_to,$scope.over_grp_status,$scope.user_id).success(function(results){
                if (results == "success") {
                    alert("overgroup add succesfully");
                    window.location = '/Admin/overGroup/' ;
                }
                else{
                    alert("error")
                }
            })
        };

        /***************** *************************************
         functionName:getOverGroup
         inputJSON:
         outputJSON:over_grp_name,assigned_to,status
         Description:for tabel
         UseIn:
         OwnerName:Shivam yadav
         Date:13/08/2019

         *******************************************************/
        $scope.getOverGroup=function(){
            $rootScope.OvergroupDetails={};

            overGroupService.getOverGroup().success(function(results){
                if (results) {

                    $rootScope.OvergroupDetails=results;
                    angular.forEach( $rootScope.OvergroupDetails,function(element){

                        $scope.overgroupValue=element

                    });
                }
                else{
                    alert("error")
                }
            });
        }
        /***************** *************************************
         functionName:DetailsOverGroup
         inputJSON:assigned_to,changed_by,changed_date,over_grp_id,over_grp_name,over_grp_status
         outputJSON:
         Description:
         UseIn:
         OwnerName:Shivam yadav
         Date:13/08/2019

         *******************************************************/

        $scope.DetailsOverGroup=function(over_grp_id){

            $rootScope.getovergroupdata={};

            overGroupService.DetailsOverGroup(over_grp_id).success(function(results){
                if (results) {

                    $scope.overgroupid=over_grp_id;
                    $rootScope.getovergroupdata=results;

                    angular.forEach( $rootScope.getovergroupdata,function(element){

                        $scope.overgroupValueData=element;
                        if($scope.overgroupid == $scope.overgroupValueData.over_grp_id){

                            $scope.overGroupdetailsData=$scope.overgroupValueData;
                        }

                    });
                }
                else{
                    alert("error")
                }
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
        $scope.OvergroupEdit=function(over_grp_id){
            $scope.IdoverGroup=over_grp_id;
            $scope.overgroupValue= $rootScope.OvergroupDetails;
            angular.forEach($scope.overgroupValue,function(element){
                $scope.overGroupEditData=element;

                if($scope.IdoverGroup == $scope.overGroupEditData.over_grp_id){
                    $scope.overgroupdata = $scope.overGroupEditData
                }
            });
        }
        /***************** *************************************
         functionName:UpdateOvergroup
         inputJSON:
         outputJSON:over_grp_name,assigned_to,
         Description:
         UseIn:
         OwnerName:Shivam yadav
         Date:13/08/2019

         *******************************************************/
        $scope.UpdateOvergroup=function(over_grp_id){
            $scope.over_grp_id=over_grp_id
            $scope.over_grp_name = $scope.overgroupdata.over_grp_name;
            $scope.selectAssignTo = $scope.overgroupdata.assigned_to;
            if($scope.selectAssignTo){
                $scope.assigned_to = $scope.selectAssignTo
            }
            $scope.user_id= LocalStorageService.get('emailId');


            overGroupService.UpdateOvergroup($scope.over_grp_id,$scope.over_grp_name,$scope.assigned_to,$scope.user_id).success(function(results){
                if (results == "success") {
                    alert("overgroup Update succesfully");
                    window.location = '/Admin/overGroup/' ;

                }
                else{
                    alert("error")
                }
            })
        };

        /***************** *************************************
         functionName:changeStatus
         inputJSON:
         outputJSON:over_grp_name,assigned_to,
         Description:
         UseIn:
         OwnerName:Shivam yadav
         Date:13/08/2019

         *******************************************************/
        $scope.changeStatus=function(over_grp_id){
            $scope.changeStatusId=over_grp_id;
            $scope.changeStatusData= $rootScope.OvergroupDetails;
            angular.forEach($scope.changeStatusData ,function(element){
                $scope.dataStatus=element;
                if($scope.changeStatusId == $scope.dataStatus.over_grp_id){
                    $scope.changestatusValue = $scope.dataStatus;

                }
            })

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
        $scope.UpdateStatus=function(over_grp_id){
            $scope.over_grp_id=over_grp_id;
            $scope.over_grp_status = $scope.changestatusValue.over_grp_status;
            $scope.user_id= LocalStorageService.get('emailId');

            overGroupService.UpdateStatus($scope.over_grp_id,$scope.over_grp_status,$scope.user_id).success(function(results){
                if (results == "success") {
                    alert("overgroup status Update succesfully");

                    window.location = '/Admin/overGroup/' ;
                }
                else{
                    alert("error")
                }
            })
        }

    };

    overGroupController.$inject = injectParams;
    angular.module('CASA')
        .controller('overGroupController', overGroupController)
})();