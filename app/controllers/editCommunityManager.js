'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','editCommunityManagerService'];
  var editCommunityManagerController = function ($scope,$rootScope,$location,$filter,editCommunityManagerService) {
    $scope.communityIdData = function(){
      $scope.communityId = $rootScope.communityIdValue ;
      $scope.comvalue=   $rootScope.communityManagerDetails ;
  
      angular.forEach($scope.comvalue, function (element) {
        $scope.communityValue = element;
          if( $scope.communityId == $scope.communityValue.cm_id){
            $scope.communityvalue = $scope.communityValue;

            if($scope.communityvalue){

             $scope.dateofbrth=$scope.communityvalue.cm_dob;
              $scope.lang=$scope.communityvalue.cm_language;
              $rootScope.moNum=$scope.communityvalue.cm_mob.slice(2,12);
              $scope.AltMoNumber=$scope.communityvalue.cm_alt_mob_no.slice(2,12);
            $scope.adress1=$scope.communityvalue.cm_address.split(',')[0];
            $scope.adress2=$scope.communityvalue.cm_address.split(',')[1];
            
            $scope.education1degree=$scope.communityvalue.cm_education_1.split(',')[0];
            $scope.education1year=$scope.communityvalue.cm_education_1.split(',')[1];
            $scope.education1Uni=$scope.communityvalue.cm_education_1.split(',')[2];
            $scope.education2degree=$scope.communityvalue.cm_education_2.split(',')[0];
            $scope.education2year=$scope.communityvalue.cm_education_2.split(',')[1];
            $scope.education2Uni=$scope.communityvalue.cm_education_2.split(',')[2];
            $scope.education3degree=$scope.communityvalue.cm_education_3.split(',')[0];
            $scope.education3year=$scope.communityvalue.cm_education_3.split(',')[1];
            $scope.education3Uni=$scope.communityvalue.cm_education_3.split(',')[2];

            if($scope.lang == null){
              $scope.preferedlang={Hindi:false,English:false}
            }
            else{
              $scope.language1=$scope.lang.split(',')[0];
              $scope.language2=$scope.lang.split(',')[1];

              if($scope.language1=="Hindi"){
                $scope.preferedlang={Hindi:true,English:false}
                if( $scope.language2=="English"){
                  $scope.preferedlang={ Hindi:true,English:true}

                  

                }

              }
               if($scope.language1 == "English"){
                  $scope.preferedlang={Hindi:false,English:true}
                  if( $scope.language2=="Hindi"){
                    $scope.preferedlang={ Hindi:true,English:true}
                  }

               }
             
               if(($scope.lang !="Hindi")&&($scope.lang !="English")&&($scope.lang != "Hindi,English")){
                $scope.preferedlang = {Hindi:false,English:false };
                $scope.languageproficiency=true;
                $scope.languageOther= $scope.lang ;

              }
            }
            if($scope.dateofbrth==null){
              $scope.dob=""
            }
            else{
              $scope.dob=$scope.dateofbrth.slice(0,10);
            }
           

            }
               
          };
         
        });

       
  
    };
    $scope.updateCommuntyManager=function(cm_id){
        
        $scope.cm_name=$scope.communityvalue.cm_name;
        $scope.cm_id=cm_id;
        $scope.cm_mob="91"+$scope.moNum;
          $scope.comnumalt=$scope.AltMoNumber;
          if($scope.comnumalt){       
             $scope.cm_alt_mob_no=""
            }
            else{
              $scope.cm_alt_mob_no="91"+$scope.comnumalt;
            }

        $scope.cm_email=$scope.communityvalue.cm_email;
        $scope.cm_address=$scope.adress1 +"," + $scope.adress2 ;
        $scope.cm_dob=$filter('date')(new Date($scope.dob), "yyyy-MM-dd");
        $scope.cm_gender=$scope.communityvalue.cm_gender;
        $scope.cm_education_1=$scope.education1degree + "," +$scope.education1year + "," + $scope.education1Uni ;
        $scope.cm_education_2=$scope.education2degree + "," + $scope.education2year + "," +$scope.education2Uni;
        $scope.cm_education_3=$scope.education3degree + "," + $scope.education3year +"," +$scope.education3Uni;

        var langua =$scope.preferedlang;
      for( var i=0;i<4;i++){
           
       var id = [i];
       var key = Object.keys( langua )[id];
       var value = langua[key];
      //  if(value == false){
      //   $scope.cm_language= "";
         
      //  }
       if(value == true)
       { 
        if(key == "Hindi"){
          $scope.language1 = key;
          $scope.cust_language1 = $scope.language1;
          $scope.cm_language = $scope.cust_language1;
        }
        if(key == "English"){
          $scope.language2 = key;  
          $scope.cust_language2 = $scope.language2; 
          $scope.cm_language = $scope.cust_language2;  
        }
        if( $scope.cust_language1 &&  $scope.cust_language2){
          $scope.language3 = $scope.cust_language1  + "," + $scope.cust_language2;  
          $scope.cust_language3 = $scope.language3 ; 
          $scope.cm_language = $scope.cust_language3;  
        }
      };
       
        $scope.otherpreferedlang= $scope.languageOther;
        if($scope.otherpreferedlang){
          $scope.cm_language=$scope.otherpreferedlang

        }
      };

      editCommunityManagerService.updateCommuntyManager($scope.cm_name,$scope.cm_id,$scope.cm_mob,$scope.cm_alt_mob_no,$scope.cm_email,$scope.cm_address,$scope.cm_dob,$scope.cm_gender,$scope.cm_education_1,$scope.cm_education_2,$scope.cm_education_3, $scope.cm_language).success(function (result){
       
        if (result) {
            alert(result);
         
        }
        else 
        {
          alert("error");
        }
       
      });


    };
    };

    editCommunityManagerController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('editCommunityManagerController',editCommunityManagerController)
  })();