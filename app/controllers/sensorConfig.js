'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$filter','sensorConfigService','homeLogoutMapService'];
  var sensorConfigController = function ($scope,$rootScope,$location,$filter,sensorConfigService,homeLogoutMapService) {

    // $scope.countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
		// $scope.complete=function(string){
			
		// 	var output=[];
		// 	angular.forEach($scope.countryList,function(country){
		// 		if(country.toLowerCase().indexOf(string.toLowerCase())>=0){
		// 			output.push(country);
		// 		}
		// 	});
		// 	$scope.filterCountry=output;
		// }
		// $scope.fillTextbox=function(string){
		// 	$scope.country=string;
		// 	$scope.filterCountry=null;
		// }
    $scope.selectedalerttype = {};

    $scope.alertType = 
    [
      {
      "selected":false,
      "name":"Civil",
     },
    {
      "selected":false,
      "name":"Health",
     },
     
    ];
    $scope.selectedalerttype   =   $scope.alertType[0];  

    $scope.selectedalertlocation = {};

    $scope.alertlocation = 
    [
      {
      "selected":false,
      "name":"Fire",
     },
    {
      "selected":false,
      "name":"Gas Detector",
     },
     {
      "selected":false,
      "name":"Motion Sensor",
     },
     {
      "selected":false,
      "name":"Door Sensor",
     },
     {
      "selected":false,
      "name":"Temperature Sensor",
     },
     {
      "selected":false,
      "name":"Vibration Sensor",
     },
     {
      "selected":false,
      "name":"Panic",
     },
     {
      "selected":false,
      "name":"Glass Break Sensor",
     },
     
    ];
    $scope.selectedalertlocation   =   $scope.alertlocation[0];  

    $rootScope.custmerDetails = function () {
   
      $scope.customerDetailsdata = [];
      $rootScope.customerDetails = {};
      sensorConfigService.custmerDetails().success(function (result) {
       
        if (result) {
         
          $rootScope.customerDetails = result;
         	// $scope.complete=function(string){
			
          //   var output=[];
          //   angular.forEach($rootScope.customerDetails,function(country){
          //     if(country.toLowerCase().indexOf(string.toLowerCase())>=0){
          //       output.push(country);
          //     }
          //   });
          //   $scope.filterCountry=output;
          // }
          // $scope.fillTextbox=function(string){
          //   $scope.country=string;
          //   $scope.filterCountry=null;
          // }
          angular.forEach($rootScope.customerDetails, function (element) {
          //  alert(element)
           $rootScope.customerDetailsvalue = element;
           $rootScope.custIdValue = $rootScope.customerDetailsvalue.cust_id;
           
          //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
          })
         
        }
       
      });
    };
    $scope.gethomeLogoutMap = function () {
      $rootScope.gethomeLogoutMapData = {};
      $scope.homeValueId = $rootScope.custIdvalue;
      homeLogoutMapService.gethomeLogoutMap().success(function (result) {  
        if (result) {
          $rootScope.gethomeLogoutMapData = result;
          angular.forEach($rootScope.gethomeLogoutMapData, function (element) {
            $scope.valueLogout = element;
            $scope.logoutID = $scope.valueLogout.cust_id;
            if($scope.homeValueId == $scope.logoutID ){
              $scope.Idrelateddata =  $scope.valueLogout;
              // $scope.sensorroom = $scope.sensoralldata.room_type;
            }
        })
        }
      });
    };
    $scope.sensordata = function(){
      $rootScope.custIdvalue = $scope.customerId.cust_id;
      $rootScope.custnamevalue = $scope.customerId.cust_name;
      sensorConfigService.sensordata($rootScope.custIdvalue).success(function (result) {   
           if(result){
             
            $scope.getSensorData = result;
            $rootScope.sensordataCustId = $scope.getSensorData[0].cust_id;
           }
           
          });
    };
    $scope.sensorValue = function(){
      $scope.valueId = $rootScope.custIdvalue;
      $scope.valueName =  $rootScope.custnamevalue;
      $scope.sensorIddata =  $rootScope.gethomeLogoutMapData;
      angular.forEach($scope.sensorIddata, function (element) {
              $scope.sensorValue = element;
              $scope.sensorID = $scope.sensorValue.cust_id;
              if($scope.valueId == $scope.sensorID){
                $scope.sensoralldata =  $scope.sensorValue;
                $scope.sensorroom = $scope.sensoralldata.room_type;
              }
          })
    };
    $scope.addsesorconfig = {
      cust_id:"",
      sensor_no:"",
      alert_msg:"",
      alert_type:"",
      alert_location:"",
    }
    $scope.addSensorConfig = function () {
      $scope.cust_id = $rootScope.custIdvalue;
      $scope.sensor_no = $scope.addsesorconfig.sensor_no ;
      $scope.addsesorconfig.alert_msg = $scope.selectedalertlocation.name;
      $scope.alert_msg = $scope.addsesorconfig.alert_msg ;
      $scope.addsesorconfig.alert_type = $scope.selectedalerttype.name; 
      $scope.alert_type = $scope.addsesorconfig.alert_type ;
      $scope.alert_location = $scope.ValueData.room_type;
     sensorConfigService.addSensorConfig($scope.cust_id,$scope.sensor_no,$scope.alert_msg, $scope.alert_type,$scope.alert_location ).success(function (result) {   
       if(result=="success"){
         alert("Your Sensor Information Added Successfully");
         window.location = '/sensorConfig/' ;
       } 
      });
    };
    $scope.clearSensorConfig = function () {
      // $scope.customerId.cust_id = "";
      $scope.addsesorconfig.sensor_no = "";
      $scope.addsesorconfig.alert_msg = "";
      $scope.addsesorconfig.alert_type = "";
      $scope.addsesorconfig.alert_location = "";
    //  $scope.alert_location = "";
    //  sensorConfigService.addSensorConfig($scope.cust_id,$scope.sensor_no,$scope.alert_msg,$scope.alert_type,$scope.alert_location).success(function (result) {   
    //    if(result=="success"){
    //      alert("Your Sensor Information Added Successfully");
    //      window.location = '/sensorConfig/' ;
    //    } 
    //   });
    };
    // $scope.getSensorConfigData = function () {
    //   $scope.sensorId = $rootScope.custIdvalue;
     
    //  sensorConfigService.getSensorConfigData().success(function (result) {   
    //    if(result){
         
    //     $scope.getSensorData = result;
    //     $rootScope.sensordataCustId = $scope.getSensorData[0].cust_id;
    //    }
       
    //   });
    // };

    };

    sensorConfigController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('sensorConfigController', sensorConfigController)
  })();