'use strict'
angular.module('ui.spinkit').directive 'skChasingDots', ['$uiSpinkitConfig', ($uiSpinkitConfig)->
  restrict: 'AE'
  replace: true
  template: '''
<div>
<style>
.sk-spinner-chasing-dots.sk-spinner {
  margin: 0 auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;
  -webkit-animation: sk-chasingDotsRotate 2s infinite linear;
          animation: sk-chasingDotsRotate 2s infinite linear; }
.sk-spinner-chasing-dots .sk-dot1, .sk-spinner-chasing-dots .sk-dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: sk-chasingDotsBounce 2s infinite ease-in-out;
          animation: sk-chasingDotsBounce 2s infinite ease-in-out; }
.sk-spinner-chasing-dots .sk-dot2 {
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
<div class="sk-spinner sk-spinner-chasing-dots">
  <div class="sk-dot1"></div>
  <div class="sk-dot2"></div>
</div>
</div>
'''
]



