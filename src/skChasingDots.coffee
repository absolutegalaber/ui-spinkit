'use strict'
angular.module('ui.spinkit').directive 'skChasingDots', ['$uiSpinkitConfig', ($uiSpinkitConfig)->
  restrict: 'AE'
  replace: true
  scope:
    size: '@size'
    color: '@color'
  link: (scope)->
    scope.size = scope.size || $uiSpinkitConfig.defaultSize
    scope.color = scope.color || $uiSpinkitConfig.defaultColor
  template: '''
<div>
<style>
.sk-spinner-chasing-dots{{::$id}}.sk-spinner{{::$id}} {
  margin: 0 auto;
  width: {{::size}}px;
  height: {{::size}}px;
  position: relative;
  text-align: center;
  -webkit-animation: sk-chasingDotsRotate 2s infinite linear;
          animation: sk-chasingDotsRotate 2s infinite linear; }
.sk-spinner-chasing-dots{{::$id}} .sk-dot1{{::$id}}, .sk-spinner-chasing-dots{{::$id}} .sk-dot2{{::$id}} {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: {{::color}};
  border-radius: 100%;
  -webkit-animation: sk-chasingDotsBounce 2s infinite ease-in-out;
          animation: sk-chasingDotsBounce 2s infinite ease-in-out; }
.sk-spinner-chasing-dots{{::$id}} .sk-dot2{{::$id}} {
  top: auto;
  bottom: 0px;
  -webkit-animation-delay: -1s;
          animation-delay: -1s; }

@-webkit-keyframes sk-chasingDotsRotate {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

@keyframes sk-chasingDotsRotate {
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

@-webkit-keyframes sk-chasingDotsBounce {
  0%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); }

  50% {
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes sk-chasingDotsBounce {
  0%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); }

  50% {
    -webkit-transform: scale(1);
            transform: scale(1); } }
</style>
<div class="sk-spinner{{::$id}} sk-spinner-chasing-dots{{::$id}}">
  <div class="sk-dot1{{::$id}}"></div>
  <div class="sk-dot2{{::$id}}"></div>
</div>
</div>
'''
]



