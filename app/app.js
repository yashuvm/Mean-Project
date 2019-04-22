'use strict';


var app = angular.module('seniorApp', ['ngRoute','ngSanitize']);
app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    
    var viewBase = '../templates/';
                    
    $routeProvider
      .when("/", {
        controller: 'homePageController',
        templateUrl:  viewBase + 'homePage.html'
      })
      .when("/registration/", {
        controller: 'registrationController',
        templateUrl: viewBase + 'registration.html'
      })
      .when("/productList/", {
        controller: 'productListController',
        templateUrl: viewBase + 'productList.html'
      })
      .when("/productEdit/", {
        controller: 'productEditController',
        templateUrl: viewBase + 'productEdit.html'
      })
      .when("/productDetail/", {
        controller: 'productDetailController',
        templateUrl: viewBase + 'productDetail.html'
      })
      .when("/productPayment/", {
        controller: 'productPaymentController',
        templateUrl: viewBase + 'productPayment.html'
      })
      .when("/analytics/", {
        controller: 'analyticsController',
        templateUrl: viewBase + 'analytics.html'
      })
      .when("/widgets/", {
        controller: 'widgetsController',
        templateUrl: viewBase + 'widgets.html'
      })
      .when("/mailbox/", {
        controller: 'mailboxController',
        templateUrl: viewBase + 'mailbox.html'
      })
      .when("/mailboxView/", {
        controller: 'mailboxViewController',
        templateUrl: viewBase + 'mailboxView.html'
      })
      .when("/mailboxCompose/", {
        controller: 'mailboxComposeController',
        templateUrl: viewBase + 'mailboxCompose.html'
      })
      .when("/googleMap/", {
        controller: 'googleMapController',
        templateUrl: viewBase + 'googleMap.html'
      })
      .when("/dataMaps/", {
        controller: 'dataMapsController',
        templateUrl: viewBase + 'dataMaps.html'
      })
      .when("/pdfViewer/", {
        controller: 'pdfViewerController',
        templateUrl: viewBase + 'pdfViewer.html'
      })
      .when("/x-Editable/", {
        controller: 'xEditableController',
        templateUrl: viewBase + 'x-Editable.html'
      })
      .when("/accordian/", {
        controller: 'accordianController',
        templateUrl: viewBase + 'accordian.html'
      })
      .when("/tabs/", {
        controller: 'tabsController',
        templateUrl: viewBase + 'tabs.html'
      })
      .when("/fileManager/", {
        controller: 'fileManagerController',
        templateUrl: viewBase + 'fileManager.html'
      })
      .when("/blog/", {
        controller: 'blogController',
        templateUrl: viewBase + 'blog.html'
      })
      .when("/blogDetail/", {
        controller: 'blogDetailController',
        templateUrl: viewBase + 'blogDetail.html'
      })
      .when("/barCharts/", {
        controller: 'barChartsController',
        templateUrl: viewBase + 'barCharts.html'
      })
      .when("/lineCharts/", {
        controller: 'lineChartsController',
        templateUrl: viewBase + 'lineCharts.html'
      })
      .when("/areaCharts/", {
        controller: 'areaChartsController',
        templateUrl: viewBase + 'areaCharts.html'
      })
      .when("/roundedCharts/", {
        controller: 'roundedChartsController',
        templateUrl: viewBase + 'roundedCharts.html'
      })
      .when("/c3/", {
        controller: 'c3Controller',
        templateUrl: viewBase + 'c3.html'
      })
      .when("/sparkLineCharts/", {
        controller: 'sparkLineChartsController',
        templateUrl: viewBase + 'sparkLineCharts.html'
      })
      .when("/staticTable/", {
        controller: 'staticTableController',
        templateUrl: viewBase + 'staticTable.html'
      })
      .when("/dataTable/", {
        controller: 'dataTableController',
        templateUrl: viewBase + 'dataTable.html'
      })
      .when("/basicFormElement/", {
        controller: 'basicFormElementController',
        templateUrl: viewBase + 'basicFormElement.html'
      })
      .when("/advanceFormElement/", {
        controller: 'advanceFormElementController',
        templateUrl: viewBase + 'advanceFormElement.html'
      })
      .when("/passwordMeter/", {
        controller: 'passwordMeterController',
        templateUrl: viewBase + 'passwordMeter.html'
      })
      .when("/dualListBox/", {
        controller: 'dualListBoxController',
        templateUrl: viewBase + 'dualListBox.html'
      })
      .when("/notification/", {
        controller: 'notificationController',
        templateUrl: viewBase + 'notification.html'
      })
      .when("/alerts/", {
        controller: 'alertController',
        templateUrl: viewBase + 'alerts.html'
      })
      .when("/modals/", {
        controller: 'modalsController',
        templateUrl: viewBase + 'modals.html'
      })
      .when("/buttons/", {
        controller: 'buttonsController',
        templateUrl: viewBase + 'buttons.html'
      })
      .when("/login/", {
        controller: 'loginController',
        templateUrl: viewBase + 'login.html'
      })
      .when("/register/", {
        controller: 'registerController',
        templateUrl: viewBase + 'register.html'
      })
      .when("/lock/", {
        controller: 'lockController',
        templateUrl: viewBase + 'lock.html'
      })
      .otherwise({
        controller: 'errorController',
        templateUrl : viewBase + 'error.html'
      });

      $locationProvider.html5Mode(true);
      
    }]);