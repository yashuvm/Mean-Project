'use strict';

(function () {

    var injectParams = ['$scope','$rootScope','$window','$location','$http','LocalStorageService','baseService'];
    var baseController = function ($scope,$rootScope,$window,$location,$http,LocalStorageService,baseService) {

        /***************** *************************************
         functionName:loginId
         inputJSON:
         outputJSON:email_id,password,roll_id
         Description:
         UseIn:baseController
         MadeBy:Sushma Shukla
         Date: 24/07/2019

         *******************************************************/
        $scope.loginId = function () {
          $scope.loginIdData = {};
          // $scope.valuedataforuser = $rootScope.message;
            $scope.loginIdData.email = LocalStorageService.get('emailId');
            $scope.loginIdData.emailIdData = LocalStorageService.get('EmailIdData');

            $rootScope.data = LocalStorageService.get('data');
            // $rootScope.subsystem3 = result[0].module_id;

            $scope.subsystemdata($scope.loginIdData.email);

        }
        /***************** *************************************
         functionName:system1
         inputJSON:
         outputJSON:
         Description:
         UseIn:baseController
         MadeBy:Sushma Shukla
         Date: 24/07/2019

         *******************************************************/
        $scope.mainbackcolor1 = function () {
            document.getElementById("1").style.backgroundColor = "#2196f3";
            // document.getElementById("hotelsystem1").style.backgroundColor = "#2196f3";
            document.getElementById("alldefaultmodule1.module_id").style.backgroundColor = "#263238";
            document.getElementById("alldefaultmodule2.module_id").style.backgroundColor = "#263238";
            document.getElementById("alldefaultmodule3.module_id").style.backgroundColor = "#263238";
            document.getElementById("alldefaultmodule4.module_id").style.backgroundColor = "#263238";
        };
        $scope.Articlemodule = function () {
            document.getElementById("systemdata8").style.backgroundColor = "#2196f3";
            document.getElementById("system19").style.backgroundColor = "#263238";
            document.getElementById("system20").style.backgroundColor = "#263238";
            document.getElementById("system21").style.backgroundColor = "#263238";
            document.getElementById("system22").style.backgroundColor = "#263238";
        };
        $scope.hotelSystemdata = function () {
            document.getElementById("hotelSystemdata").style.backgroundColor = "#2196f3";
            document.getElementById("hoteluserdata").style.backgroundColor = "#263238";
        };
        $scope.systemdatavalue1 = function () {
            document.getElementById("systemdatavalue1").style.backgroundColor = "#2196f3";
            document.getElementById("userdata1").style.backgroundColor = "#263238";
        };
        $scope.articlehotel = function() {
            document.getElementById("hotelsystem1").style.backgroundColor = "#2196f3";
            document.getElementById("hotelsystemdata1").style.backgroundColor = "#2196f3";
            document.getElementById("store1").style.backgroundColor = "#263238";
            document.getElementById("production1").style.backgroundColor = "#263238";
            document.getElementById("materialTracking1").style.backgroundColor = "#263238";
            document.getElementById("barInventory1").style.backgroundColor = "#263238";
        };
        $scope.purchasehotel1 = function() {
            document.getElementById("purchasehotel1").style.backgroundColor = "#2196f3";
            document.getElementById("vendor1").style.backgroundColor = "#263238";
        };
        $scope.dataAcquision1 = function() {
            document.getElementById("dataAcquision1").style.backgroundColor = "#2196f3";
            document.getElementById("bookingdatavalue1").style.backgroundColor = "#263238";
            document.getElementById("evalutionTooldata1").style.backgroundColor = "#263238";
            document.getElementById("proximitymarketingdata1").style.backgroundColor = "#263238";
        };
        $scope.articlehoteldata1 = function() {
            document.getElementById("hotelsystemdata1").style.backgroundColor = "#2196f3";
            document.getElementById("storedata2").style.backgroundColor = "#263238";
            document.getElementById("hotelrelateddata1").style.backgroundColor = "#263238";
            document.getElementById("material1").style.backgroundColor = "#263238";
            document.getElementById("barInventorydata1").style.backgroundColor = "#263238";
        };
        $scope.purchasemodule = function () {
            document.getElementById("systemdata1").style.backgroundColor = "#2196f3";
            document.getElementById("system1").style.backgroundColor = "#263238";
        };
        $scope.dataAcquisionmodule = function () {
            document.getElementById("systemdata2").style.backgroundColor = "#2196f3";
            document.getElementById("system2").style.backgroundColor = "#263238";
            document.getElementById("system3").style.backgroundColor = "#263238";
            document.getElementById("system4").style.backgroundColor = "#263238";
        };
        $scope.Inhouseservicemodule = function () {
            document.getElementById("systemdata3").style.backgroundColor = "#2196f3";
            document.getElementById("system5").style.backgroundColor = "#263238";
            document.getElementById("system6").style.backgroundColor = "#263238";
            document.getElementById("system7").style.backgroundColor = "#263238";
        };
        $scope.storemodule = function () {
            document.getElementById("systemdata4").style.backgroundColor = "#2196f3";
            document.getElementById("system8").style.backgroundColor = "#263238";
            document.getElementById("system9").style.backgroundColor = "#263238";
            document.getElementById("system10").style.backgroundColor = "#263238";
        };
        $scope.vouchermodule = function () {
            document.getElementById("systemdata5").style.backgroundColor = "#2196f3";
            document.getElementById("system12").style.backgroundColor = "#263238";
            document.getElementById("system13").style.backgroundColor = "#263238";
            // document.getElementById("system10").style.backgroundColor = "#263238";
        };
        $scope.IPSmodule = function () {
            document.getElementById("systemdata6").style.backgroundColor = "#2196f3";
            document.getElementById("system15").style.backgroundColor = "#263238";
            document.getElementById("system16").style.backgroundColor = "#263238";
            document.getElementById("system17").style.backgroundColor = "#263238";
        };
        $scope.Systemconfmodule = function () {
            document.getElementById("systemdata7").style.backgroundColor = "#2196f3";
            document.getElementById("system18").style.backgroundColor = "#263238";
            // document.getElementById("system16").style.backgroundColor = "#263238";
            // document.getElementById("system17").style.backgroundColor = "#263238";
        };
       $scope.subsystemdata = function(email){
        $rootScope.dataId = email;
           baseService.subsystemdata($scope.dataId).success(function (result) {
               if (result) {
                   var i = 0;
                   $scope.message1 = result;
                   for(i=0;i<=$scope.message1.length-1;i++ ){
                       if($scope.message1[i].subsystem_id == 1){
                           $scope.subsystemfirst = $scope.message1[i];
                           $rootScope.subsystem1 = $scope.message1[i].subsystem_id;


                       }
                       else if($scope.message1[i].subsystem_id == 2){
                           $scope.subsystemsecond = $scope.message1[i];
                           $rootScope.subsystem1 = $scope.message1[i].subsystem_id;


                       }
                       else if($scope.message1[i].subsystem_id == 3){
                           $scope.subsystemthird = $scope.message1[i];
                           $rootScope.subsystem1 = $scope.message1[i].subsystem_id;


                       }
                       else if($scope.message1[i].subsystem_id == 4){
                           $scope.subsystemfourth = $scope.message1[i];
                           $rootScope.subsystem1 = $scope.message1[i].subsystem_id;
                       }
                       else if($scope.message1[i].subsystem_id == 5){
                           $scope.subsystemfive = $scope.message1[i];
                           $rootScope.subsystem1 = $scope.message1[i].subsystem_id;


                       }
                       else if($scope.message1[i].subsystem_id == 6){
                           $scope.subsystemsix = $scope.message1[i];
                           $rootScope.subsystem1 = $scope.message1[i].subsystem_id;

                       }
                       else if($scope.message1[i].subsystem_id == 7){
                           $scope.subsystemseven = $scope.message1[i];
                           $rootScope.subsystem1 = $scope.message1[i].subsystem_id;
                       }
                       else{
                           $scope.subsystemeight = $scope.message1[i];
                           $rootScope.subsystem1 = $scope.message1[i].subsystem_id;
                       }

                   }
                   // $scope.subsystemnine = $scope.message1[8];

                   $scope.submoduledefaultdata($scope.dataId);
               }
           });
       };
        $scope.submoduledefaultdata = function(Id){
            $rootScope.submoduledefaultId = $rootScope.subsystem1;
            $scope.mainId = Id;
            baseService.submoduledefaultdata($scope.mainId).success(function (result) {

                if (result) {
                    $scope.datavalue = result;
                    for(var j=0;j<=$scope.datavalue.length-1;j++ ){
                        if($scope.datavalue[j].module_id == 1){
                            $scope.defaultmodule = $scope.datavalue[j];
                            $scope.subsystemdatavalue = $scope.defaultmodule.sub_system_id;

                        }
                        else if(($scope.datavalue[j].module_id == 2) && ($scope.mainId == '2')){
                            $scope.defaultmodule = $scope.datavalue[j];
                            $scope.subsystemdatavalue = $scope.defaultmodule.sub_system_id;
                        }
                        else if($scope.datavalue[j].module_id == 2){
                            $scope.alldefaultmodule1 = $scope.datavalue[j];

                        }
                        else if($scope.datavalue[j].module_id == 3){
                            $scope.alldefaultmodule2 = $scope.datavalue[j];
                        }
                        else if($scope.datavalue[j].module_id == 4){
                            $scope.alldefaultmodule3 = $scope.datavalue[j];
                        }
                        else if($scope.datavalue[j].module_id == 5){
                            $scope.alldefaultmodule4 = $scope.datavalue[j];
                        }
                        // else if($scope.message1[i].subsystem_id == 6){
                        //     $scope.subsystemsix = $scope.message1[i];
                        //
                        // }
                        // else if($scope.message1[i].subsystem_id == 7){
                        //     $scope.subsystemseven = $scope.message1[i];
                        //
                        // }
                        // else{
                        //     $scope.subsystemeight = $scope.message1[i];
                        //
                        // }

                    }

                    // $scope.defaultmodule = result;
                    // $scope.defaultmodulehotel = result[27];
                    // $scope.defaultmoduleEmployee = result[28];
                    // $scope.alldefaultmodulelength = result.length;
                    // $scope.alldefaultmodule = result.slice(1,($scope.alldefaultmodulelength));
                    // $scope.alldefaultmodule1 = $scope.alldefaultmodule[0];

                    // $scope.alldefaultmodule2 = $scope.alldefaultmodule[1];
                    // $scope.alldefaultmodule3 = $scope.alldefaultmodule[2];
                    // $scope.alldefaultmodule4 = $scope.alldefaultmodule[3];
                    // $scope.alldefaultmodule5 = $scope.alldefaultmodule[4];
                    // $scope.subsystemdatavalue = $scope.defaultmodule.sub_system_id;

                    if($scope.submoduledefaultId){
                        $scope.submodule();
                    }
                    // $rootScope.subsystem1 = result[0].subsystem_id;

                }
            });
        };


        $scope.systembutton = function(subsystem_id){
            $scope.subsystem_id = subsystem_id;
            $scope.mainId = $rootScope.dataId;
            baseService.submoduledefaultdata($scope.mainId).success(function (result) {
                if (result) {
                    $scope.systemmodule = result;

                }
            });
        };

        $scope.systembuttondata = function(subsystem_id){
            $rootScope.subsystem_iddata = subsystem_id;
            // LocalStorageService.set('subhotel1',$rootScope.subsystem_iddata);

            // $scope.moduleId = module_id ;
            $scope.mainId = $rootScope.dataId;
            baseService.submoduledefaultdata($scope.mainId).success(function (result) {
                if (result) {
                    $scope.systemmoduledatavalue = result;
                    // $scope.submoduledefaultdata2($scope.mainId);
                    //  $scope.moduledata($scope.mainId);
                }
            });
        };
        // $scope.getSubSystemdata = function(){
        //     $scope.getSubsystemId = LocalStorageService.get('subhotel1');
        // };
        $scope.systembuttondata2 = function(subsystem_id){
            $rootScope.subsystem_iddata2 = subsystem_id;
            LocalStorageService.set('module1',$rootScope.subsystem_iddata2);
            $scope.mainId2 = $rootScope.dataId;
            baseService.systembuttondata2($scope.mainId2,$rootScope.subsystem_iddata2).success(function (result) {
                if (result) {
                    $scope.systemmoduledatavalue2 = result[0];
                    $rootScope.moduleid2 = result[0].module_id;
                    $scope.systemmodule2 = result.slice(1,(result[0].length));
                    $scope.systemmoduledata1 = $scope.systemmodule2[0];
                    $scope.systemmoduledata2 = $scope.systemmodule2[1];
                    $scope.systemmoduledata3 = $scope.systemmodule2[2];
                    $scope.systemmoduledata4 = $scope.systemmodule2[3];
                    $scope.systemmoduledata5 = $scope.systemmodule2[4];

                    $scope.getModuleId2();

                }
            });
        };

        $scope.systembuttondatavalue2 = function(subsystem_iddata2){
            $rootScope.subsystemdata11 = subsystem_iddata2;
            $scope.mainId2 = $rootScope.dataId;
            baseService.systembuttondata2($scope.mainId2,$rootScope.subsystem_iddata2).success(function (result) {
                if (result) {
                    $scope.systemmoduledatavalue2 = result[0];
                    $rootScope.moduleid2 = result[0].module_id;
                    $scope.systemmodule2 = result.slice(1,(result[0].length));
                    $scope.systemmoduledata1 = $scope.systemmodule2[0];
                    $scope.systemmoduledata2 = $scope.systemmodule2[1];
                    $scope.systemmoduledata3 = $scope.systemmodule2[2];
                    $scope.systemmoduledata4 = $scope.systemmodule2[3];
                    $scope.systemmoduledata5 = $scope.systemmodule2[4];
                    $scope.getModuleId2();

                }
            });
        };
        $scope.getmoduledata = function(){
                $scope.moduldatainformation = LocalStorageService.get('module1');
            $scope.subsystem_iddata2 = $scope.moduldatainformation;
            $scope.mainId2 = $rootScope.dataId;
            baseService.systembuttondata2($scope.mainId2,$scope.subsystem_iddata2).success(function (result) {
                if (result) {
                    $scope.subSystemdata = result;
                    for(var i=0;i<= $scope.subSystemdata.length-1;i++ ){
                        if($scope.subSystemdata[i].module_id == 1){
                            $scope.subsystemdataValuefirst = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 2){
                            $scope.subsystemdataValuefirst = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 3){
                            $scope.subsystemdataValuefirst = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 4){
                            $scope.subsystemdataValuefirst = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 5){
                            $scope.subsystemdataValuefirst = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 6){
                            $scope.subsystemdataValuesecond = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 7){
                            $scope.subsystemdataValuesecond = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 8){
                            $scope.subsystemdataValueThird = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 9){
                            $scope.subsystemdataValueThird = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 10){
                            $scope.subsystemdataValueThird = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 11){
                            $scope.subsystemdataValueThird = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 13){
                            $scope.subsystemdataValueFourth = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 14){
                            $scope.subsystemdataValueFourth = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 15){
                            $scope.subsystemdataValueFourth = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 16){
                            $scope.subsystemdataValueFourth = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 17){
                            $scope.subsystemdataValueFive = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 18){
                            $scope.subsystemdataValueFive = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 19){
                            $scope.subsystemdataValueFive = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 20){
                            $scope.subsystemdataValueFive = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 21){
                            $scope.subsystemdataValueSix = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 22){
                            $scope.subsystemdataValueSix = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 23){
                            $scope.subsystemdataValueSix = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 24){
                            $scope.subsystemdataValueSix = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 25){
                            $scope.subsystemdataValueSeven = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 26){
                            $scope.subsystemdataValueSeven = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 27){
                            $scope.subsystemdataValueSeven = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 28){
                            $scope.subsystemdataValueSeven = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 29){
                            $scope.subsystemdataValueEight = $scope.subSystemdata[i];
                        }
                        else if($scope.subSystemdata[i].module_id == 30){
                            $scope.subsystemdataValueEight = $scope.subSystemdata[i];
                        }
                    }

                    $scope.getmoduledatasystemmoduledatavalue2 = result[0];
                    $scope.modulehoteldata = $scope.getmoduledatasystemmoduledatavalue2.module_id;
                    $rootScope.getmoduledatamoduleid2 = result[0].module_id;
                    $scope.getmoduledatasystemmodule2 = result.slice(1,(result[0].length));
                    $scope.getmoduledatasystemmoduledata1 = $scope.getmoduledatasystemmodule2[0];
                    $scope.modulehotelrelateddata2 = $scope.getmoduledatasystemmoduledata1.sub_system_id;
                    $scope.getmoduledatasystemmoduledata2 = $scope.getmoduledatasystemmodule2[1];
                    $scope.modulehotelrelateddata3 = $scope.getmoduledatasystemmoduledata2.sub_system_id;
                    $scope.getmoduledatasystemmoduledata3 = $scope.getmoduledatasystemmodule2[2];
                    $scope.modulehotelrelateddata4 = $scope.getmoduledatasystemmoduledata3.sub_system_id;
                    $scope.getmoduledatasystemmoduledata4 = $scope.getmoduledatasystemmodule2[3];
                    $scope.modulehotelrelateddata5 = $scope.getmoduledatasystemmoduledata4.sub_system_id;
                    $scope.getmoduledatasystemmoduledata5 = $scope.getmoduledatasystemmodule2[4];
                    $scope.modulehotelrelateddata6 = $scope.getmoduledatasystemmoduledata5.sub_system_id;
                    $scope.getModuleId2();


                }
            });

        };
        $scope.getSubSystemIdData = function(sub_system_id){
            // $scope.moduldatainformation = LocalStorageService.get('module1');
            $scope.subSystemData = sub_system_id;
            LocalStorageService.set('subSystemModule',$scope.subSystemData);

        };

        $scope.submodule = function(){
            $scope.submodule_id = $rootScope.submoduledefaultId;
            $scope.mainId = $rootScope.dataId;
            baseService.submodule($scope.mainId).success(function (result) {
                if (result) {
                    $scope.submodule = result;
                }
            });
        };
        $scope.getModuleId = function(module_id){
            $scope.userId = $rootScope.dataId;
            $scope.module_id = module_id;
            $scope.moduledataValue = module_id;
            $scope.moduledataValue2 = module_id;
            $scope.moduledataValue3 = module_id;
            $scope.module_iddataIPS = module_id;
            $scope.moduledataValue4 = module_id;
            $scope.moduledataDataAcquision = module_id;
            $scope.moduledataStore = module_id;
            $scope.moduledataUtilizationValue = module_id;
            $scope.moduleEvalutiondata = module_id;
            $scope.module_iddataArticleCreation = module_id;
            $scope.module_iddataSystemConfiguration = module_id;
            $scope.modUtilizationSetupData = module_id;
            $scope.moduledataInHouseService = module_id;
            $scope.moduleEvaluationTool1 = module_id;
            $scope.module_idContractService = module_id;
            $scope.module_idBudget = module_id;
            $scope.module_idProductionValue = module_id;
            $scope.purchasedataModule = module_id;
            $scope.module_idStore = module_id;
            $scope.module_idUserConfiguration = module_id;
            $scope.module_idEvaluationTool = module_id;
            $scope.module_idProduction = module_id;
            $scope.module_idReports2 = module_id;
            $scope.module_idAudit = module_id;
            $scope.module_idReport27 = module_id;
            $scope.module_idStore11 = module_id;
            $scope.module_idMaterialTracking = module_id;
            $scope.modPurchase = module_id;
            $scope.modArticleCreation = module_id;
            $scope.modDataAcquision = module_id;
            $scope.modInHouseService = module_id;
            $scope.modStore = module_id;
            $scope.modVoucher = module_id;
            $scope.modIPS = module_id;
            $scope.modSystemConfiguration = module_id;
            $scope.module_iddataVoucher = module_id;

            baseService.getModuleId($scope.userId,$scope.module_id).success(function (result) {
                if (result) {
                    $scope.submoduledata = result;
                    $scope.materialcontrolsunmodule1  = $scope.submoduledata[0];
                    $scope.materialcontrolsunmodule2  = $scope.submoduledata[1];
                    $scope.materialcontrolsunmodule3  = $scope.submoduledata[2];
                    $scope.materialcontrolsunmodule4  = $scope.submoduledata[3];
                    $scope.materialcontrolsunmodule5  = $scope.submoduledata[4];
                    $scope.materialcontrolsunmodule6  = $scope.submoduledata[5];
                    $scope.materialcontrolsunmodule7  = $scope.submoduledata[6];
                    $scope.materialcontrolsunmodule8  = $scope.submoduledata[7];

                }
            });
        };
        $scope.getModuleIdsystem23 = function(module_id){

            $scope.module_iddataReports3 = module_id;
            $scope.module_iddataReportsValue = module_id;
            $scope.module_idBarInventory = module_id;
            $scope.modEvalutionTooldata = module_id;
            $scope.module_idBooking = module_id;
            $scope.module_idInHouseService = module_id;
            $scope.module_idUtilizationSetup = module_id;

            $scope.module_id = module_id;
            baseService.getModuleId($scope.userId,$scope.module_id).success(function (result) {
                if (result) {
                    $scope.submoduledatavalue1 = result;
                    $scope.submoduledatauserconfig1  = $scope.submoduledatavalue1[0];
                    $scope.submoduledatauserconfig2  = $scope.submoduledatavalue1[1];
                    $scope.submoduledatauserconfig3  = $scope.submoduledatavalue1[2];
                }
            });
        };
        $scope.getModuleIdsystemproximity = function(module_id){

            $scope.module_idProximityMarketing = module_id;
            $scope.module_id = module_id;
            $scope.module_idReports34 = module_id;
            $scope.module_idReports33 = module_id;

            baseService.getModuleId($scope.userId,$scope.module_id).success(function (result) {
                if (result) {
                    $scope.submoduledatavalue1 = result;
                    $scope.submoduledatauserconfig1  = $scope.submoduledatavalue1[0];
                    $scope.submoduledatauserconfig2  = $scope.submoduledatavalue1[1];
                    $scope.submoduledatauserconfig3  = $scope.submoduledatavalue1[2];
                }
            });
        };
        $scope.getModuleIdsystem2 = function(module_id){
            $scope.userId = $rootScope.dataId;
            $scope.module_iddata = module_id;
            $scope.module_iddata1 = module_id;
            $scope.module_iddata2 = module_id;
            $scope.module_iddata3 = module_id;
            $scope.module_iddata4 = module_id;
            $scope.module_iddataBooking = module_id;
            $scope.module_iddataInhouseService2 = module_id;
            $scope.module_iddataEvaluationTool = module_id;
            $scope.module_iddataProximityMarketing = module_id;
            $scope.module_iddataContractService = module_id;
            $scope.module_iddataReports = module_id;
            $scope.module_iddataContractService2 = module_id;
            $scope.module_iddataReports2 = module_id;
            $scope.module_idContractService2 = module_id;
            $scope.moduleAuditdata = module_id;
            $scope.module_idTracking = module_id;
            $scope.module_iddataStore2 = module_id;
            $scope.module_iddataStore = module_id;
            $scope.productiondatavalue = module_id;
            $scope.bardatamodule1 = module_id;
            $scope.auditDataValue = module_id;
            $scope.moduleAudit = module_id;
            $scope.module_iddataBudget = module_id;
            $scope.module_iddataAudit = module_id;
            $scope.module_iddataReports3 = module_id;
            $scope.module_dataEvalution = module_id;

            $scope.module_iddataUtilizationSetup = module_id;
            $scope.module_iddataTracking = module_id;
            $scope.module_iddataReports4 = module_id;

            $scope.module_iddataUserConfiguration = module_id;
            $scope.module_iddataStore3 = module_id;
            $scope.module_iddataProduction = module_id;
            $scope.module_iddataMaterialTracking = module_id;
            $scope.module_iddataBarInventory = module_id;

            $scope.module_id = $scope.module_iddata;
            baseService.getModuleId($scope.userId,$scope.module_id).success(function (result) {
                if (result) {
                    $scope.submoduledatavalue1 = result;
                    $scope.submoduledatauserconfig1  = $scope.submoduledatavalue1[0];
                    $scope.submoduledatauserconfig2  = $scope.submoduledatavalue1[1];
                    $scope.submoduledatauserconfig3  = $scope.submoduledatavalue1[2];
                }
            });
        };
        $scope.getModuleId2 = function(){
            $scope.userId = $rootScope.dataId;
            $scope.module_id = $rootScope.moduleid2;

            baseService.getModuleId($scope.userId,$scope.module_id).success(function (result) {
                if (result) {
                    $scope.submoduledata = result;
                    $scope.submoduledataSystemConfig1 = $scope.submoduledata[0];
                    $scope.submoduledataSystemConfig2 = $scope.submoduledata[1];
                }
            });
        }
    };

    baseController.$inject = injectParams;
    angular.module('CASA')
        .controller('baseController', baseController)
})();