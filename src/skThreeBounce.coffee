'use strict'
angular.module('ui.spinkit').directive 'skThreeBounce', [->
  restrict: 'AE'
  replace: true
  template: '''
<div>
<style>
/*
 *  Usage:
 *
 *    <div class="sk-spinner sk-spinner-three-bounce">
 *      <div class="sk-bounce1"></div>
 *      <div class="sk-bounce2"></div>
 *      <div class="sk-bounce3"></div>
 *    </div>
 *
 */
.sk-spinner-three-bounce.sk-spinner {
  margin: 0 auto;
  width: 70px;
  text-align: center; }
.sk-spinner-three-bounce div {
  width: 18px;
  height: 18px;
  background-color: #333;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-threeBounceDelay 1.4s infinite ease-in-out;
          animation: sk-threeBounceDelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both; }
.sk-spinner-three-bounce .sk-bounce1 {
  -webkit-animation-delay: -0.32s;
          animation-delay: -0.32s; }
.sk-spinner-three-bounce .sk-bounce2 {
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
<div class="sk-spinner sk-spinner-three-bounce">
  <div class="sk-bounce1"></div>
  <div class="sk-bounce2"></div>
  <div class="sk-bounce3"></div>
</div>
</div>
'''
]
