'use strict'

angular.module('ui.spinkit').provider '$uiSpinkitConfig', ->
  config =
    defaultColor: '#333'
    defaultSize: 40

  setDefaultColor: (newDefaultColor)->
    config.defaultColor = newDefaultColor

  setDefaultSize: (newDefaultSize)->
    config.defaultSize = newDefaultSize

  $get: ()->
    config