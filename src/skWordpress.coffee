'use strict'
angular.module('ui.spinkit').directive 'skWordpress', ['$uiSpinkitConfig', ($uiSpinkitConfig)->
  restrict: 'AE'
  replace: true
  scope:
    size: '@size'
    color: '@color'
  link: (scope)->
    scope.size = scope.size || $uiSpinkitConfig.defaultSize
    scope.innerCircleSize = scope.size / 4
    scope.color = scope.color || $uiSpinkitConfig.defaultColor
  template: '''
<div>
<style>
.sk-spinner-wordpress{{::$id}}.sk-spinner{{::$id}} {
  background-color: {{::color}};
  width: {{::size}}px;
  height: {{::size}}px;
  border-radius: {{::size}}px;
  position: relative;
  margin: 0 auto;
  -webkit-animation: sk-innerCircle 1s linear infinite;
          animation: sk-innerCircle 1s linear infinite; }
.sk-spinner-wordpress{{::$id}} .sk-inner-circle{{::$id}} {
  display: block;
  background-color: #fff;
  width: {{::innerCircleSize}}px;
  height: {{::innerCircleSize}}px;
  position: absolute;
  border-radius: {{::innerCircleSize}}px;
  top: 5px;
  left: 5px; }

@-webkit-keyframes sk-innerCircle {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0); }

  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

@keyframes sk-innerCircle {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0); }

  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }
</style>
<div class="sk-spinner{{::$id}} sk-spinner-wordpress{{::$id}}">
  <span class="sk-inner-circle{{::$id}}"></span>
  </div>
</div>
'''
]
