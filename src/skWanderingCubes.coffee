'use strict'
angular.module('ui.spinkit').directive 'skWanderingCubes', ['$uiSpinkitConfig', ($uiSpinkitConfig) ->
  restrict: 'AE'
  replace: true
  scope:
    size: '@size'
    color: '@color'
  link: (scope) ->
    scope.color = scope.color || $uiSpinkitConfig.defaultColor
  template: '''
<div>
<style>
.sk-spinner-wandering-cubes{{::$id}}.sk-spinner{{::$id}} {
  margin: 0 auto;
  width: 32px;
  height: 32px;
  position: relative; }
.sk-spinner-wandering-cubes{{::$id}} .sk-cube1{{::$id}}, .sk-spinner-wandering-cubes{{::$id}} .sk-cube2{{::$id}} {
  background-color: {{::color}};
  width: 10px;
  height: 10px;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: sk-wanderingCubeMove 1.8s infinite ease-in-out;
          animation: sk-wanderingCubeMove 1.8s infinite ease-in-out; }
.sk-spinner-wandering-cubes{{::$id}} .sk-cube2{{::$id}} {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s; }

@-webkit-keyframes sk-wanderingCubeMove {
  25% {
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
            transform: translateX(42px) rotate(-90deg) scale(0.5); }

  50% {
    /* Hack to make FF rotate in the right direction */
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
            transform: translateX(42px) translateY(42px) rotate(-179deg); }

  50.1% {
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
            transform: translateX(42px) translateY(42px) rotate(-180deg); }

  75% {
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
            transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5); }

  100% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg); } }

@keyframes sk-wanderingCubeMove {
  25% {
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
            transform: translateX(42px) rotate(-90deg) scale(0.5); }

  50% {
    /* Hack to make FF rotate in the right direction */
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
            transform: translateX(42px) translateY(42px) rotate(-179deg); }

  50.1% {
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
            transform: translateX(42px) translateY(42px) rotate(-180deg); }

  75% {
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
            transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5); }

  100% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg); } }
</style>
<div class="sk-spinner{{::$id}} sk-spinner-wandering-cubes{{::$id}}">
  <div class="sk-cube1{{::$id}}"></div>
  <div class="sk-cube2{{::$id}}"></div>
</div>
</div>
'''
]
