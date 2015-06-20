'use strict'
angular.module('ui.spinkit').directive 'skWave', ['$uiSpinkitConfig', ($uiSpinkitConfig) ->
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
.sk-spinner-wave{{::$id}}.sk-spinner{{::$id}} {
  margin: 0 auto;
  width: {{::(size*4)}}px;
  height: {{::size}}px;
  text-align: center;
  font-size: 10px; }
.sk-spinner-wave{{::$id}} div {
  background-color: {{::color}};
  height: 100%;
  width: {{::(size / 5)}}px;
  display: inline-block;
  -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
          animation: sk-waveStretchDelay 1.2s infinite ease-in-out; }
.sk-spinner-wave{{::$id}} .sk-rect2 {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s; }
.sk-spinner-wave{{::$id}} .sk-rect3 {
  -webkit-animation-delay: -1s;
          animation-delay: -1s; }
.sk-spinner-wave{{::$id}} .sk-rect4 {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s; }
.sk-spinner-wave{{::$id}} .sk-rect5 {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s; }

@-webkit-keyframes sk-waveStretchDelay {
  0%, 40%, 100% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4); }

  20% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1); } }

@keyframes sk-waveStretchDelay {
  0%, 40%, 100% {
    -webkit-transform: scaleY(0.4);
            transform: scaleY(0.4); }

  20% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1); } }
</style>
<div class="sk-spinner{{::$id}} sk-spinner-wave{{::$id}}">
  <div class="sk-rect1"></div>
  <div class="sk-rect2"></div>
  <div class="sk-rect3"></div>
  <div class="sk-rect4"></div>
  <div class="sk-rect5"></div>
</div>
</div>
'''
]
