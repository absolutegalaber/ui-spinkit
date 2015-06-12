'use strict'
angular.module('ui.spinkit').directive 'skWordpress', [->
  restrict: 'AE'
  replace: true
  template: '''
<div>
<style>
.sk-spinner-wordpress.sk-spinner {
  background-color: #333;
  width: 30px;
  height: 30px;
  border-radius: 30px;
  position: relative;
  margin: 0 auto;
  -webkit-animation: sk-innerCircle 1s linear infinite;
          animation: sk-innerCircle 1s linear infinite; }
.sk-spinner-wordpress .sk-inner-circle {
  display: block;
  background-color: #fff;
  width: 8px;
  height: 8px;
  position: absolute;
  border-radius: 8px;
  top: 5px;
  left: 5px; }

@-webkit-keyframes sk-innerCircle {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0); }

  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

@keyframes sk-innerCircle {
  0% {
    -webkit-transform: rotate(0);
            transform: rotate(0); }

  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }
</style>
<div class="sk-spinner sk-spinner-wordpress">
  <span class="sk-inner-circle"></span>
  </div>
</div>
'''
]