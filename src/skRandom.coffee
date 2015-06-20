'use strict'
angular.module('ui.spinkit').directive 'skRandom', ['$compile', '$uiSpinkitConfig', ($compile, $uiSpinkitConfig) ->
  theDirectives = [
    'sk-rotating-plane', 'sk-double-bounce', 'sk-wave', 'sk-wandering-cubes'
    'sk-pulse', 'sk-chasing-dots', 'sk-three-bounce', 'sk-circle',
    'sk-cube-grid', 'sk-wordpress', 'sk-fading-circle'
  ]

  replace: true
  scope:
    size: '@size'
    color: '@color'
  link: (scope, elem) ->
    directiveIndex = Math.floor(Math.random() * (theDirectives.length - 1) + 1)
    theDirective = theDirectives[directiveIndex]
    scope.size = scope.size || $uiSpinkitConfig.defaultSize
    scope.color = scope.color || $uiSpinkitConfig.defaultColor
    toAdd = $compile("<div #{theDirective} size='{{::size}}' color='{{::color}}'></div>")(scope)
    elem.append(toAdd)
]