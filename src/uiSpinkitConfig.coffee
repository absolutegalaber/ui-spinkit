'use strict'
class UiSpinkitConfig
  constructor: ->
    @defaultConfig =
      defaultWidth: 60
      defaultHeight: 60
    @rotatingPlaneConfig =
      size: 30
      color: '#333'

angular.module('ui.spinkit').service('$uiSpinkitConfig', UiSpinkitConfig)