'use strict'
testApp = angular.module 'uiSpinkitTestApp', ['ui.spinkit', 'ui.bootstrap']


testApp.config ['$uiSpinkitConfigProvider', ($uiSpinkitConfigProvider)->
  $uiSpinkitConfigProvider.setDefaultColor('#9FA120')
  $uiSpinkitConfigProvider.setDefaultSize(40)
  $uiSpinkitConfigProvider.setDefaultColor('#9FA120')
]