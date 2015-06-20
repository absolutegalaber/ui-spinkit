'use strict'
testApp = angular.module 'uiSpinkitTestApp', ['ui.spinkit', 'ui.bootstrap']


testApp.config ['$uiSpinkitConfigProvider', ($uiSpinkitConfigProvider) ->
  $uiSpinkitConfigProvider.setDefaultSize(40)
  $uiSpinkitConfigProvider.setDefaultColor('#000000')
]