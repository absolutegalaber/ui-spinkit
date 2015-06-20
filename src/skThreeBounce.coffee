'use strict'
angular.module('ui.spinkit').directive 'skThreeBounce', ['$uiSpinkitConfig', ($uiSpinkitConfig) ->
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
.sk-spinner-three-bounce{{::$id}}.sk-spinner{{::$id}} {
  margin: 0 auto;
  width: {{::((size * 3) + 10) }}px;
  text-align: center; }
.sk-spinner-three-bounce{{::$id}} div {
  width: {{::size}}px;
  height: {{::size}}px;
  background-color: {{::color}};
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-threeBounceDelay 1.4s infinite ease-in-out;
          animation: sk-threeBounceDelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both; }
.sk-spinner-three-bounce{{::$id}} .sk-bounce1{{::$id}} {
  -webkit-animation-delay: -0.32s;
          animation-delay: -0.32s; }
.sk-spinner-three-bounce{{::$id}} .sk-bounce2{{::$id}} {
  -webkit-animation-delay: -0.16s;
          animation-delay: -0.16s; }

@-webkit-keyframes sk-threeBounceDelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); }

  40% {
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes sk-threeBounceDelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); }

  40% {
    -webkit-transform: scale(1);
            transform: scale(1); } }

</style>
<div class="sk-spinner{{::$id}} sk-spinner-three-bounce{{::$id}}">
  <div class="sk-bounce1{{::$id}}"></div>
  <div class="sk-bounce2{{::$id}}"></div>
  <div class="sk-bounce3{{::$id}}"></div>
</div>
</div>
'''
]
