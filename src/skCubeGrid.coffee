'use strict'
angular.module('ui.spinkit').directive 'skCubeGrid', [->
  restrict: 'AE'
  replace: true
  template: '''
<div>
<style>
.sk-spinner-cube-grid {
  /*
   * Spinner positions
   * 1 2 3
   * 4 5 6
   * 7 8 9
   */ }
  .sk-spinner-cube-grid.sk-spinner {
    width: 30px;
    height: 30px;
    margin: 0 auto; }
  .sk-spinner-cube-grid .sk-cube {
    width: 33%;
    height: 33%;
    background-color: #333;
    float: left;
    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; }
  .sk-spinner-cube-grid .sk-cube:nth-child(1) {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .sk-spinner-cube-grid .sk-cube:nth-child(2) {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-spinner-cube-grid .sk-cube:nth-child(3) {
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s; }
  .sk-spinner-cube-grid .sk-cube:nth-child(4) {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
  .sk-spinner-cube-grid .sk-cube:nth-child(5) {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .sk-spinner-cube-grid .sk-cube:nth-child(6) {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-spinner-cube-grid .sk-cube:nth-child(7) {
    -webkit-animation-delay: 0s;
            animation-delay: 0s; }
  .sk-spinner-cube-grid .sk-cube:nth-child(8) {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
  .sk-spinner-cube-grid .sk-cube:nth-child(9) {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }

@-webkit-keyframes sk-cubeGridScaleDelay {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1); }

  35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1); } }

@keyframes sk-cubeGridScaleDelay {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1); }

  35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1); } }
</style>
 <div class="sk-spinner sk-spinner-cube-grid">
 <div class="sk-cube"></div>
 <div class="sk-cube"></div>
 <div class="sk-cube"></div>
 <div class="sk-cube"></div>
 <div class="sk-cube"></div>
 <div class="sk-cube"></div>
 <div class="sk-cube"></div>
 <div class="sk-cube"></div>
 <div class="sk-cube"></div>
 </div></div>
'''
]
