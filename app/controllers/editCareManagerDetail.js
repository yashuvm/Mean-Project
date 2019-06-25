'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter'];
  var editCareManagerController = function ($scope,$rootScope,$location,$filter) {

    $scope.careManagerIdData = function(){
        $scope.careManagerId = $rootScope.CareId ;
        $scope.carevalue = $rootScope.careManagerDetails;
    
        angular.forEach($scope.carevalue, function (element) {
          $scope.careManagerValue = element;
            if( $scope.careManagerId == $scope.careManagerValue.crm_id){
              $scope.careManagerIdValue = $scope.careManagerValue;
              $scope.address1 = $scope.careManagerIdValue.crm_address.split(',')[0];
              $scope.address2 = $scope.careManagerIdValue.crm_address.split(',')[1];
              $scope.degree1 = $scope.careManagerIdValue.crm_education_1.split(',')[0];
              $scope.degree2 = $scope.careManagerIdValue.crm_education_2.split(',')[0];
              $scope.degree3 = $scope.careManagerIdValue.crm_education_3.split(',')[0];
              $scope.year1 = $scope.careManagerIdValue.crm_education_1.split(',')[1];
              $scope.year2 = $scope.careManagerIdValue.crm_education_2.split(',')[1];
              $scope.year3 = $scope.careManagerIdValue.crm_education_3.split(',')[1];
              $scope.university1 = $scope.careManagerIdValue.crm_education_1.split(',')[2];
              $scope.university2 = $scope.careManagerIdValue.crm_education_2.split(',')[2];
              $scope.university3 = $scope.careManagerIdValue.crm_education_3.split(',')[2];
              if($scope.careManagerIdValue.crm_dob == null){
                $scope.dob = "";
              }
             else{
                $scope.dob = $scope.careManagerIdValue.crm_dob.slice(0,10);
             }
              $scope.lan = $scope.careManagerIdValue.crm_language;
              if($scope.lan){
                $scope.languagevalue1 = $scope.lan.split(',')[0];
                $scope.languagevalue2 = $scope.lan.split(',')[1];
                if($scope.languagevalue1 == "Hindi"){
                    $scope.preferredlanguage = { Hindi : true , English:false}; 
                    if($scope.languagevalue1 == "English"){
                        $scope.preferredlanguage = { Hindi : true , English:true}; 
                    }
                }
                if($scope.languagevalue1 == "English"){
                    $scope.preferredlanguage = { Hindi : false , English:true}; 
                    if($scope.languagevalue2 == "Hindi"){
                        $scope.preferredlanguage = { Hindi : true, English:true}; 
                    }
                }
              }
              else{
                if($scope.lan == ""){
                    $scope.preferredlanguage = { Hindi : false , English:false}; 
                }  
              }
            }
           
          })
    
      };
  };
  editCareManagerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('editCareManagerController',editCareManagerController)
  })();