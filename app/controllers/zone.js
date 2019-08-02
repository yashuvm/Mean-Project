/**
 * Created by sushma shukla on 02/05/19.
 */
(function () {
  var injectParams = ['$scope',  '$rootScope', '$window', '$location','$filter','$http','zoneService'];
  var zoneController = function ($scope, $rootScope, $window, $location,$filter,  $http,zoneService) {
    
    $scope.rsrch =function(item) {
      if(!$scope.getting || (item.rm_name.toLowerCase().indexOf($scope.getting)!= -1)||(item.region_name.toLowerCase().indexOf($scope.getting)!= -1)||(item.region_phone.indexOf($scope.getting)!= -1)){
          return true;
      }
      else{
        return false;
      }
      
  };
  $scope.search1 = function(item1) {
    if (!$scope.query1 || (item1.region_name.toLowerCase().indexOf($scope.query1) != -1) || (item1.cluster_name.toLowerCase().indexOf($scope.query1) != -1) ||(item1.clm_name.toLowerCase().indexOf($scope.query1) != -1)){
        return true;
    }
    return false;
};
$scope.search2 = function(item) {
  if (!$scope.query2 || (item.comm_name.toLowerCase().indexOf($scope.query2) != -1) || (item.cm_name.toLowerCase().indexOf($scope.query2) != -1) ||(item.cluster_name.toLowerCase().indexOf($scope.query2) != -1) || (item.region_name.toLowerCase().indexOf($scope.query2)!=-1)){
      return true;
  }
  return false;
};

$rootScope.regionManager = function () {
 
// $scope.customerDetailsdata = [];
$rootScope.regionManagerDetails = {};
zoneService.regionManager().success(function (result) {
 
  if (result) {
   
    $rootScope.regionManagerDetails = result;
   
    angular.forEach($rootScope.regionManagerDetails, function (element) {
   
     $scope.regionManagerDetailsvalue = element;
     $rootScope.regionIdget = element.rm_id;
     $rootScope.regionidvalue = $scope.regionvaldata;
     if($rootScope.regionidvalue == $rootScope.regionIdget){
         $scope.newdata = element.rm_mob;
         $scope.regionIdValue=element.rm_id;
         $scope.reginIdvalue=element.region_id;
    
         
     }
     
   
    })
   
  }
 
});
};

$rootScope.clusterManager = function () {
 
// $scope.customerDetailsdata = [];
$rootScope.clusterManagerDetails = {};
zoneService.clusterManager().success(function (result) {
 
  if (result) {
   
    $rootScope.clusterManagerDetails = result;
   
    angular.forEach($rootScope.clusterManagerDetails, function (element) {
    //  alert(element)
     $rootScope.clusterManagerDetailsvalue = element;
     $scope.clusterdataid=element.clm_id;
     $scope.newid=$rootScope.clustermobdata;
     if( $scope.clusterdataid == $scope.newid){
      $scope.clustermobilenumber=element.clm_mob;
      $scope.cluId=element.clm_id;
     }
     
    //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
    })
   
  }
 
});
};

$rootScope.communityManager = function () {
 
// $scope.customerDetailsdata = [];
$rootScope.communityManagerDetails = {};
zoneService.communityManager().success(function (result) {
 
  if (result) {
   
    $rootScope.communityManagerDetails = result;
   
    angular.forEach($rootScope.communityManagerDetails, function (element) {
    //  alert(element)
     $rootScope.communityManagerDetailsvalue = element;
     $scope.commid=element.cm_id
       $scope.newid=$rootScope.comunitymangerId;
       if($scope.commid == $scope.newid ){
          $scope.communityphone=element.cm_mob;
          $scope.clommunitymanagerId=element.cm_id
       }
     
    //  $rootScope.custvalue = $rootScope.customerDetailsvalue.cust_id;
    })
   
  }
 
});
};

$scope.addRegion = 
{
region_name:"",
region_location:"",
region_address:"",
region_phone:"",
// region_status:"",
rm_id:"",
regiondata:"",

};
 $scope.addRegion = function(){
   $scope.region_name = $scope.addRegion.region_name;
   $scope.region_location = $scope.addRegion.region_location;
   $scope.region_address = $scope.addRegion.region_address;
   $scope.region_phone = $scope.addRegion.region_phone;
   $scope.rm_id = $scope.addRegion.regiondata.rm_id;
   zoneService.addRegionManagerdata($scope.region_name,$scope.region_location,$scope.region_address,$scope.region_phone,$scope.rm_id).success(function (result) {
    if (result) {
      alert(result);
      window.location = '/zone/' ; 
    }
    else{
      alert("error");
    }
  });
 };
 $scope.clearRegion = function(){
  $scope.addRegion.region_name = "";
  $scope.addRegion.region_location = "";
  $scope.addRegion.region_address = "";
  $scope.addRegion.region_phone = "";
  $scope.addRegion.regiondata.rm_id = "";
  $scope.addRegion.regiondata.rm_mob = "";
};

 $scope.addCluster = 
 {
  cluster_name:"",
  cluster_location:"",
  cluster_address:"",
  cluster_phone:"",
  // cluster_status:"",
  clm_id:"",
  region_id:"",
  clusterdata:"",
  regiondata:""
  }
  $scope.addCluster = function(){
    $scope.cluster_name = $scope.addCluster.cluster_name;
    $scope.cluster_location = $scope.addCluster.cluster_location;
    $scope.cluster_address = $scope.addCluster.cluster_address;
    $scope.cluster_phone = $scope.addCluster.cluster_phone;
    $scope.clm_id = $scope.addCluster.clusterdata.clm_id;
    $scope.region_id = $scope.addCluster.regiondata.rm_id;
    zoneService.addClusterManagerdata($scope.cluster_name,$scope.cluster_location,$scope.cluster_address,$scope.cluster_phone,$scope.clm_id,$scope.region_id).success(function (result) { 
     if (result) {
       alert(result);
       window.location = '/zone/' ;
     }
     else{
       alert("error");
     }
   });
  };
  $scope.clearCluster = function(){
    $scope.addCluster.cluster_name = "";
    $scope.addCluster.cluster_location = "";
    $scope.addCluster.cluster_address = "";
    $scope.addCluster.cluster_phone = "";
    $scope.addCluster.clusterdata.clm_id = "";
    $scope.addCluster.regiondata.rm_id = "";
    $scope.addCluster.clusterdata.clm_mob = "";
  };

  $scope.addCommunity = 
{
  comm_name:"",
  comm_location:"",
  comm_address:"",
  comm_phone:"",  
  cluster_id:"",
  cm_id:"",
 clusterdata:"", 
 communitydata:""
};
 $scope.addCommunity = function(){
   $scope.comm_name = $scope.addCommunity.comm_name;
   $scope.comm_location = $scope.addCommunity.comm_location;
   $scope.comm_address = $scope.addCommunity.comm_address;
   $scope.comm_phone = $scope.addCommunity.comm_phone;
   $scope.cluster_id = $scope.addCommunity.clusterdata.clm_id;
   $scope.cm_id = $scope.addCommunity.communitydata.cm_id;
   zoneService.addCommunityManagerData($scope.comm_name,$scope.comm_location,$scope.comm_address,$scope.comm_phone,$scope.cluster_id,$scope.cm_id).success(function (result) {
    if (result) { 
      alert(result);
      window.location = '/zone/' ;
    }
    else{
      alert("error");
    }
  });
 };
 $scope.clearCommunity = function(){
  $scope.addCommunity.comm_name = "";
  $scope.addCommunity.comm_location = "";
  $scope.addCommunity.comm_address = "";
  $scope.addCommunity.comm_phone = "";
  $scope.addCommunity.clusterdata.clm_id = "";
  $scope.addCommunity.communitydata.cm_id = "";
  $scope.addCommunity.clusterdata.region_name = "";
  $scope.addCommunity.communitydata.cm_mob = "";
};

// edit region manager

$scope.getregionId=function(region_id){
 $scope.regionId=region_id;
 $scope.value=$rootScope.getregionManagerdata;

 angular.forEach($scope.value,function(element){
 $scope.Value=element;
 if($scope.regionId == $scope.Value.region_id){
    $scope.reginval=$scope.Value;
    $rootScope.regionvaldata= $scope.reginval.rm_id;
    $rootScope.regionManager();
 }
 })

};


$scope.updateregion=function(region_id){
      
       $scope.region_id=region_id;
      $scope.region_name=$scope.reginval.region_name;
      $scope.region_location=$scope.reginval.region_location;
      $scope.region_address=$scope.reginval.region_address
      $scope.region_phone=$scope.reginval.region_phone;
      
      $scope.dataofregion=$scope.regenmanager;
     
      if ($scope.dataofregion == undefined){
        $scope.rm_id=$scope.regionIdValue;
    
      }
      else{
        $scope.rm_id=$scope.regenmanager.valuedata.rm_id;
      }

  zoneService.updateregion($scope.region_id,$scope.region_name,$scope.region_location,$scope.region_address,$scope.region_phone,$scope.rm_id).success(function(result){
    if(result){
      alert(result)
    }
    else{
      alert('error')
    }
  });
};

 $scope.getRegionData = function () {
 
  $rootScope.getregionManagerdata = {};
  zoneService.getRegionManagerData().success(function (result) {
   
    if (result) {
    
      $rootScope.getregionManagerdata = result;
     
      angular.forEach($scope.getregionManagerdata, function (data) {
     
       $scope.getregionManagerdatavalue = data;
       
       
     
      })
     
    }
   
  });
};

/* cluster update */

$scope.getclusterId=function(cluster_id){
  $scope.clusterId=cluster_id;
  $scope.value=$rootScope.getClusterManagerdata;
 
  angular.forEach($scope.value,function(element){
  $scope.Value=element;
  if($scope.clusterId == $scope.Value.cluster_id){
     $scope.clusterval=$scope.Value;
     $rootScope.clustermobdata=$scope.clusterval.clm_id;
     $rootScope.clusterManager();
     
     
  }
  })
 };
//  $scope.updateClusterRegionManager=function(region_id,rm_id){
//   $scope.regmanagerdata=rm_id;
//   if($scope.regmanagerdata){
//       $scope.rm_id=$scope.regmanagerdata;
//   }
//   $scope.reginId=region_id;
//   if($scope.reginId){
//     $scope.region_id=$scope.reginId;
//   }

//   zoneService.updateClusterRegionManager($scope.rm_id,$scope.region_id).success(function(result){
//     if(result){
//      alert(result)
//     }
//     else{
//      alert('error')
//     }
//     });
//  }

 $scope.updtaeCluster=function(cluster_id){
      
 $scope.cluster_id=cluster_id;
 $scope.cluster_name=$scope.clusterval.cluster_name;
 $scope.cluster_location=$scope.clusterval.cluster_location;
 $scope.cluster_address=$scope.clusterval.cluster_address;
 $scope.cluster_phone=$scope.clusterval.cluster_phone;
 
 
 $scope.reginId=$scope.clusterregiondata;
 if($scope.reginId == undefined){
  $scope.region_id=$scope.clusterval.region_id;
 }
 else{
  $scope.region_id=$scope.reginId.region_id;
 }
 $scope.clmmanager=$scope.clusManagerget;
 if($scope.clmmanager== undefined){
   $scope.clm_id=$scope.cluId;
 }
 else{
  $scope.clm_id=$scope.clmmanager.clm_id;
 }
 


zoneService.updtaeCluster($scope.cluster_id,$scope.cluster_name,$scope.cluster_location,$scope.cluster_address,$scope.cluster_phone,$scope.clm_id,$scope.region_id).success(function(result){
if(result){
 alert(result)
}
else{
 alert('error')
}
});
};

$scope.getClusterData = function () {
 
  $rootScope.getClusterManagerdata = {};
  zoneService.getClusterData().success(function (result) {
   
    if (result) {
    
      $rootScope.getClusterManagerdata = result;
     
      angular.forEach($scope.getClusterManagerdata, function (data) {
     
       $scope.getClusterManagerdatavalue = data;
     
      })
     
    }
   
  });
};

// update community

$scope.getcommunityId=function(comm_id){
$scope.communityId=comm_id;
$scope.value1=$rootScope.getCommunityManagerdata;
angular.forEach($scope.value1,function(element){
$scope.vlauedata=element;
if($scope.communityId==$scope.vlauedata.comm_id){
   $scope.communityvalue=$scope.vlauedata;
   $rootScope.comunitymangerId=$scope.communityvalue.cm_id;
   $rootScope.communityManager();
}
})

};


$scope.updateCommunity=function(comm_id){
 $scope.comm_id=comm_id;
 $scope.comm_name=$scope.communityvalue.comm_name;
 
 $scope.comm_location=$scope.communityvalue.comm_location;
 $scope.comm_address=$scope.communityvalue.comm_address;
 $scope.comm_phone=$scope.communityvalue.comm_phone;
 
 $scope.clusterValueId=$scope.getclusterdataValue;
 if($scope.clusterValueId == undefined){
  $scope.cluster_id=$scope.communityvalue.cluster_id
 }
 else{
  $scope.cluster_id=$scope.clusterValueId.cluster_id;
 }

 $scope.comIdValue=$scope.communityValuedata;
 if($scope.comIdValue==undefined){
  $scope.cm_id=$scope.clommunitymanagerId;
 }
 else{
  $scope.cm_id=$scope.comIdValue.cm_id;
 }

 
 zoneService.updateCommunity($scope.comm_id,$scope.comm_name,$scope.cluster_id,$scope.comm_location,$scope.comm_address,$scope.comm_phone,$scope.cm_id).success(function(results){
   if(results){
     alert(results)
   }
   else{
     alert("error")
   };
 })

}

$scope.getCommunityData = function () {
 
  $rootScope.getCommunityManagerdata = {};
  zoneService.getCommunityData().success(function (result) {
   
    if (result) {
    
      $rootScope.getCommunityManagerdata = result;
     
      angular.forEach($scope.getCommunityManagerdata, function (data) {
     
        $rootScope.getCommunityManagerdatavalue = data;
     
      })
     
    }
   
  });
};

$scope.getAlldata= function () {
 
  $scope.getAllValue = {};
  zoneService.getAlldata().success(function (result) {
   
    if (result) {
    
      $scope.getAllValue = result;
     
      angular.forEach($scope.getAllValue, function (data) {
     
       $scope.getAllValueData = data;
     
      })
     
    }
   
  });
};

  };
  zoneController.$inject = injectParams;
  angular.module('seniorApp').controller('zoneController', zoneController);
}());
