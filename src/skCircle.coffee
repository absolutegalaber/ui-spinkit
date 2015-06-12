'use strict'
angular.module('ui.spinkit').directive 'skWave', [->
  restrict: 'AE'
  replace: true
  template: '''
<div>
<style>
/*
 *  Usage:
 *
 *    <div class="sk-spinner sk-spinner-wave">
 *      <div class="sk-rect1"></div>
 *      <div class="sk-rect2"></div>
 *      <div class="sk-rect3"></div>
 *      <div class="sk-rect4"></div>
 *      <div class="sk-rect5"></div>
 *    </div>
 *
 */
.sk-spinner-wave.sk-spinner {
  margin: 0 auto;
  width: 50px;
  height: 30px;
  text-align: center;
  font-size: 10px; }
.sk-spinner-wave div {
  background-color: #333;
  height: 100%;
  width: 6px;
  display: inline-block;
  -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
          animation: sk-waveStretchDelay 1.2s infinite ease-in-out; }
.sk-spinner-wave .sk-rect2 {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s; }
.sk-spinner-wave .sk-rect3 {
  -webkit-animation-delay: -1s;
          animation-delay: -1s; }
.sk-spinner-wave .sk-rect4 {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s; }
.sk-spinner-wave .sk-rect5 {
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
<div class="sk-spinner sk-spinner-wave">
  <div class="sk-rect1"></div>
  <div class="sk-rect2"></div>
  <div class="sk-rect3"></div>
  <div class="sk-rect4"></div>
  <div class="sk-rect5"></div>
</div>
</div>
'''
]
