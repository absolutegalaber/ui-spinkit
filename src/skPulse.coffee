'use strict'
angular.module('ui.spinkit').directive 'skPulse', [->
  restrict: 'AE'
  replace: true
  template: '''
<div>
<style>
/*
 *  Usage:
 *
 *    <div class="sk-spinner sk-spinner-pulse"></div>
 *
 */
.sk-spinner-pulse.sk-spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto;
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;
          animation: sk-pulseScaleOut 1s infinite ease-in-out; }

@-webkit-keyframes sk-pulseScaleOut {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0); }

  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0; } }

@keyframes sk-pulseScaleOut {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0); }

  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0; } }
</style>
<div class="sk-spinner sk-spinner-pulse"></div>
</div>
'''
]
