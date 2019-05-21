'use strict';

(function () {

  var injectParams = ['$scope','$rootScope','$location','$timeout'];
  var homeCareRegistrationController = function ($scope,$rootScope,$location,$timeout) {

    $scope.init = function(){
      $scope.date = null;
      $scope.datepickerOptions = {
        minDate: new Date('2010-05-01'),
        initDate: new Date()
      };
     
    };

   
    
    // $scope.genders=['other'];
    $scope.selection=[];

    $scope.toggleSelection = function toggleSelection(gender) {
      var idx = $scope.selection.indexOf(gender);
      if (idx > -1) {
        // is currently selected
        $scope.selection.splice(idx, 1);
       }
       else {
         // is newly selected
         $scope.selection.push(gender);
       }
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
  }

    $scope.clicked = function(){
      alert("Confirm Registration");
  };
  
  $scope.homecare = {
    user_name : "",
    mobile_number : "",
  }

  $scope.registration = function () {
   
   $scope.user_name = $scope.homecare.user_name;
   $scope.mobile_number = $scope.homecare.mobile_number;
 
  };
  
    };

    homeCareRegistrationController.$inject = injectParams;
    angular.module('seniorApp')
      .controller('homeCareRegistrationController', homeCareRegistrationController)
      .directive("ngFileSelect", function(fileReader, $timeout) {
        return {
          scope: {
            ngModel: '='
          },
          link: function($scope, el) {
            function getFile(file) {
              fileReader.readAsDataUrl(file, $scope)
                .then(function(result) {
                  $timeout(function() {
                    $scope.ngModel = result;
                  });
                });
            }
    
            el.bind("change", function(e) {
              var file = (e.srcElement || e.target).files[0];
              getFile(file);
            });
          }
        };
      })
    
      
.factory("fileReader", function($q, $log) {
  var onLoad = function(reader, deferred, scope) {
    return function() {
      scope.$apply(function() {
        deferred.resolve(reader.result);
      });
    };
  };

  var onError = function(reader, deferred, scope) {
    return function() {
      scope.$apply(function() {
        deferred.reject(reader.result);
      });
    };
  };

  var onProgress = function(reader, scope) {
    return function(event) {
      scope.$broadcast("fileProgress", {
        total: event.total,
        loaded: event.loaded
      });
    };
  };

  var getReader = function(deferred, scope) {
    var reader = new FileReader();
    reader.onload = onLoad(reader, deferred, scope);
    reader.onerror = onError(reader, deferred, scope);
    reader.onprogress = onProgress(reader, scope);
    return reader;
  };

  var readAsDataURL = function(file, scope) {
    var deferred = $q.defer();

    var reader = getReader(deferred, scope);
    reader.readAsDataURL(file);

    return deferred.promise;
  };

  return {
    readAsDataUrl: readAsDataURL
  };
});
  })();