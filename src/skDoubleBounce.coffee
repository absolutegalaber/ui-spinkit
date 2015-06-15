'use strict'
angular.module('ui.spinkit').directive 'skDoubleBounce', ['$uiSpinkitConfig', ($uiSpinkitConfig)->
  restrict: 'AE'
  replace: true
  scope:
    size: '@size'
    color: '@color'
  link: (scope)->
    scope.size = scope.size || $uiSpinkitConfig.doubleBounceConfig.size
    scope.color = scope.color || $uiSpinkitConfig.doubleBounceConfig.color
  template: '''
<div>
<style>
.sk-spinner-double-bounce{{::$id}}.sk-spinner{{::$id}} {
  width: {{::size}}px;
  height: {{::size}}px;
  position: relative;
  margin: 0 auto; }
.sk-spinner-double-bounce{{::$id}} .sk-double-bounce1, .sk-spinner-double-bounce{{::$id}} .sk-double-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: {{::color}};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: sk-doubleBounce 2s infinite ease-in-out;
          animation: sk-doubleBounce 2s infinite ease-in-out; }
.sk-spinner-double-bounce{{::$id}} .sk-double-bounce2 {
  -webkit-animation-delay: -1s;
          animation-delay: -1s; }

@-webkit-keyframes sk-doubleBounce {
  0%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); }

  50% {
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes sk-doubleBounce {
  0%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); }

  50% {
    -webkit-transform: scale(1);
            transform: scale(1); } }
</style>
<div class="sk-spinner{{::$id}} sk-spinner-double-bounce{{::$id}}">
  <div class="sk-double-bounce1"></div>
  <div class="sk-double-bounce2"></div>
</div>
</div>
'''
]
