'use strict'
angular.module('ui.spinkit').directive 'skFadingCircle', ['$uiSpinkitConfig', ($uiSpinkitConfig)->
  restrict: 'AE'
  replace: true
  scope:
    size: '@size'
    color: '@color'
  link: (scope)->
    scope.size = scope.size || $uiSpinkitConfig.fadingCircleConfig.size
    scope.color = scope.color || $uiSpinkitConfig.fadingCircleConfig.color
  template: '''
<div>
<style>
.sk-spinner-fading-circle{{::$id}}.sk-spinner{{::$id}} {
  margin: 0 auto;
  width: {{::size}}px;
  height: {{::size}}px;
  position: relative; }
.sk-spinner-fading-circle{{::$id}} .sk-circle{{::$id}} {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0; }
.sk-spinner-fading-circle{{::$id}} .sk-circle{{::$id}}:before {
  content: '';
  display: block;
  margin: 0 auto;
  width: 18%;
  height: 18%;
  background-color: {{::color}};
  border-radius: 100%;
  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out;
          animation: sk-circleFadeDelay 1.2s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both; }
.sk-spinner-fading-circle{{::$id}} .sk-circle2 {
  -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
          transform: rotate(30deg); }
.sk-spinner-fading-circle{{::$id}} .sk-circle3 {
  -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
          transform: rotate(60deg); }
.sk-spinner-fading-circle{{::$id}} .sk-circle4 {
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg); }
.sk-spinner-fading-circle{{::$id}} .sk-circle5 {
  -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
          transform: rotate(120deg); }
.sk-spinner-fading-circle{{::$id}} .sk-circle6 {
  -webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
          transform: rotate(150deg); }
.sk-spinner-fading-circle{{::$id}} .sk-circle7 {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg); }
.sk-spinner-fading-circle{{::$id}} .sk-circle8 {
  -webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
          transform: rotate(210deg); }
.sk-spinner-fading-circle{{::$id}} .sk-circle9 {
  -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
          transform: rotate(240deg); }
.sk-spinner-fading-circle{{::$id}} .sk-circle10 {
  -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
          transform: rotate(270deg); }
.sk-spinner-fading-circle{{::$id}} .sk-circle11 {
  -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
          transform: rotate(300deg); }
.sk-spinner-fading-circle{{::$id}} .sk-circle12 {
  -webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
          transform: rotate(330deg); }
.sk-spinner-fading-circle{{::$id}} .sk-circle2:before {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s; }
.sk-spinner-fading-circle{{::$id}} .sk-circle3:before {
  -webkit-animation-delay: -1s;
          animation-delay: -1s; }
.sk-spinner-fading-circle{{::$id}} .sk-circle4:before {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s; }
.sk-spinner-fading-circle{{::$id}} .sk-circle5:before {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s; }
.sk-spinner-fading-circle{{::$id}} .sk-circle6:before {
  -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s; }
.sk-spinner-fading-circle{{::$id}} .sk-circle7:before {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s; }
.sk-spinner-fading-circle{{::$id}} .sk-circle8:before {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s; }
.sk-spinner-fading-circle{{::$id}} .sk-circle9:before {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s; }
.sk-spinner-fading-circle{{::$id}} .sk-circle10:before {
  -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s; }
.sk-spinner-fading-circle{{::$id}} .sk-circle11:before {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s; }
.sk-spinner-fading-circle{{::$id}} .sk-circle12:before {
  -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s; }

@-webkit-keyframes sk-circleFadeDelay {
  0%, 39%, 100% {
    opacity: 0; }

  40% {
    opacity: 1; } }

@keyframes sk-circleFadeDelay {
  0%, 39%, 100% {
    opacity: 0; }

  40% {
    opacity: 1; } }
</style>
<div class="sk-spinner{{::$id}} sk-spinner-fading-circle{{::$id}}">
   <div class="sk-circle1 sk-circle{{::$id}}"></div>
   <div class="sk-circle2 sk-circle{{::$id}}"></div>
   <div class="sk-circle3 sk-circle{{::$id}}"></div>
   <div class="sk-circle4 sk-circle{{::$id}}"></div>
   <div class="sk-circle5 sk-circle{{::$id}}"></div>
   <div class="sk-circle6 sk-circle{{::$id}}"></div>
   <div class="sk-circle7 sk-circle{{::$id}}"></div>
   <div class="sk-circle8 sk-circle{{::$id}}"></div>
   <div class="sk-circle9 sk-circle{{::$id}}"></div>
   <div class="sk-circle10 sk-circle{{::$id}}"></div>
   <div class="sk-circle11 sk-circle{{::$id}}"></div>
   <div class="sk-circle12 sk-circle{{::$id}}"></div>
</div>
</div>
'''
]
