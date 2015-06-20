'use strict'
angular.module('ui.spinkit').directive 'skCircle', ['$uiSpinkitConfig', ($uiSpinkitConfig) ->
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
.sk-spinner-circle{{::$id}}.sk-spinner{{::$id}} {
  margin: 0 auto;
  width: {{::size}}px;
  height: {{::size}}px;
  position: relative; }
.sk-spinner-circle{{::$id}} .sk-circle{{::$id}} {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0; }
.sk-spinner-circle{{::$id}} .sk-circle{{::$id}}:before {
  content: '';
  display: block;
  margin: 0 auto;
  width: 20%;
  height: 20%;
  background-color: {{::color}};
  border-radius: 100%;
  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out;
          animation: sk-circleBounceDelay 1.2s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both; }
.sk-spinner-circle{{::$id}} .sk-circle2{{::$id}} {
  -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
          transform: rotate(30deg); }
.sk-spinner-circle{{::$id}} .sk-circle3{{::$id}} {
  -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
          transform: rotate(60deg); }
.sk-spinner-circle{{::$id}} .sk-circle4{{::$id}} {
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg); }
.sk-spinner-circle{{::$id}} .sk-circle5{{::$id}} {
  -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
          transform: rotate(120deg); }
.sk-spinner-circle{{::$id}} .sk-circle6{{::$id}} {
  -webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
          transform: rotate(150deg); }
.sk-spinner-circle{{::$id}} .sk-circle7{{::$id}} {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg); }
.sk-spinner-circle{{::$id}} .sk-circle8{{::$id}} {
  -webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
          transform: rotate(210deg); }
.sk-spinner-circle{{::$id}} .sk-circle9{{::$id}} {
  -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
          transform: rotate(240deg); }
.sk-spinner-circle{{::$id}} .sk-circle10{{::$id}} {
  -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
          transform: rotate(270deg); }
.sk-spinner-circle{{::$id}} .sk-circle11{{::$id}} {
  -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
          transform: rotate(300deg); }
.sk-spinner-circle{{::$id}} .sk-circle12{{::$id}} {
  -webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
          transform: rotate(330deg); }
.sk-spinner-circle{{::$id}} .sk-circle2{{::$id}}:before {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s; }
.sk-spinner-circle{{::$id}} .sk-circle3{{::$id}}:before {
  -webkit-animation-delay: -1s;
          animation-delay: -1s; }
.sk-spinner-circle{{::$id}} .sk-circle4{{::$id}}:before {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s; }
.sk-spinner-circle{{::$id}} .sk-circle5{{::$id}}:before {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s; }
.sk-spinner-circle{{::$id}} .sk-circle6{{::$id}}:before {
  -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s; }
.sk-spinner-circle{{::$id}} .sk-circle7{{::$id}}:before {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s; }
.sk-spinner-circle{{::$id}} .sk-circle8{{::$id}}:before {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s; }
.sk-spinner-circle{{::$id}} .sk-circle9{{::$id}}:before {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s; }
.sk-spinner-circle{{::$id}} .sk-circle10{{::$id}}:before {
  -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s; }
.sk-spinner-circle{{::$id}} .sk-circle11{{::$id}}:before {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s; }
.sk-spinner-circle{{::$id}} .sk-circle12{{::$id}}:before {
  -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s; }

@-webkit-keyframes sk-circleBounceDelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); }

  40% {
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes sk-circleBounceDelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0); }

  40% {
    -webkit-transform: scale(1);
            transform: scale(1); } }
</style>
<div class="sk-spinner{{::$id}} sk-spinner-circle{{::$id}}">
  <div class="sk-circle1{{::$id}} sk-circle{{::$id}}"></div>
  <div class="sk-circle2{{::$id}} sk-circle{{::$id}}"></div>
  <div class="sk-circle3{{::$id}} sk-circle{{::$id}}"></div>
  <div class="sk-circle4{{::$id}} sk-circle{{::$id}}"></div>
  <div class="sk-circle5{{::$id}} sk-circle{{::$id}}"></div>
  <div class="sk-circle6{{::$id}} sk-circle{{::$id}}"></div>
  <div class="sk-circle7{{::$id}} sk-circle{{::$id}}"></div>
  <div class="sk-circle8{{::$id}} sk-circle{{::$id}}"></div>
  <div class="sk-circle9{{::$id}} sk-circle{{::$id}}"></div>
  <div class="sk-circle10{{::$id}} sk-circle{{::$id}}"></div>
  <div class="sk-circle11{{::$id}} sk-circle{{::$id}}"></div>
  <div class="sk-circle12{{::$id}} sk-circle{{::$id}}"></div>
</div>
</div>
'''
]
