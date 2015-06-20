'use strict'
angular.module('ui.spinkit').directive 'skPulse', ['$uiSpinkitConfig', ($uiSpinkitConfig) ->
  restrict: 'AE'
  replace: true
  scope:
    size: '@size'
    color: '@color'
  link: (scope) ->
    scope.size = scope.size || $uiSpinkitConfig.defaultSize
    scope.color = scope.color || $uiSpinkitConfig.defaultColor
  template: '''
<div>
<style>
.sk-spinner-pulse{{::$id}}.sk-spinner{{::$id}} {
  width: {{::size}}px;
  height: {{::size}}px;
  margin: 0 auto;
  background-color: {{::color}};
  border-radius: 100%;
  -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;
          animation: sk-pulseScaleOut 1s infinite ease-in-out; }

@-webkit-keyframes sk-pulseScaleOut {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0); }

  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0; } }

@keyframes sk-pulseScaleOut {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0); }

  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0; } }
</style>
<div class="sk-spinner{{::$id}} sk-spinner-pulse{{::$id}}"></div>
</div>
'''
]
