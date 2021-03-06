(function() {
  'use strict';
  var uiSpinkit;

  uiSpinkit = angular.module('ui.spinkit', []);

}).call(this);

//# sourceMappingURL=uiSpinkitModule.js.map

(function() {
  'use strict';
  angular.module('ui.spinkit').directive('skRotatingPlane', [
    '$uiSpinkitConfig', function($uiSpinkitConfig) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          size: '@size',
          color: '@color'
        },
        link: function(scope) {
          scope.size = scope.size || $uiSpinkitConfig.defaultSize;
          return scope.color = scope.color || $uiSpinkitConfig.defaultColor;
        },
        template: '<div>\n<style>\n.sk-spinner-rotating-plane{{::$id}}.sk-spinner{{::$id}} {\n  width: {{::size}}px;\n  height: {{::size}}px;\n  background-color: {{::color}};\n  margin: 0 auto;\n  -webkit-animation: sk-rotatePlane 1.2s infinite ease-in-out;\n          animation: sk-rotatePlane 1.2s infinite ease-in-out; }\n\n@-webkit-keyframes sk-rotatePlane {\n  0% {\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n            transform: perspective(120px) rotateX(0deg) rotateY(0deg); }\n\n  50% {\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }\n\n  100% {\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); } }\n\n@keyframes sk-rotatePlane {\n  0% {\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n            transform: perspective(120px) rotateX(0deg) rotateY(0deg); }\n\n  50% {\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }\n\n  100% {\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); } }\n</style>\n<div class="sk-spinner{{::$id}} sk-spinner-rotating-plane{{::$id}}">\n</div>\n</div>'
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=skRotatingPlane.js.map

(function() {
  'use strict';
  angular.module('ui.spinkit').directive('skDoubleBounce', [
    '$uiSpinkitConfig', function($uiSpinkitConfig) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          size: '@size',
          color: '@color'
        },
        link: function(scope) {
          scope.size = scope.size || $uiSpinkitConfig.defaultSize;
          return scope.color = scope.color || $uiSpinkitConfig.defaultColor;
        },
        template: '<div>\n<style>\n.sk-spinner-double-bounce{{::$id}}.sk-spinner{{::$id}} {\n  width: {{::size}}px;\n  height: {{::size}}px;\n  position: relative;\n  margin: 0 auto; }\n.sk-spinner-double-bounce{{::$id}} .sk-double-bounce1, .sk-spinner-double-bounce{{::$id}} .sk-double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: {{::color}};\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-doubleBounce 2s infinite ease-in-out;\n          animation: sk-doubleBounce 2s infinite ease-in-out; }\n.sk-spinner-double-bounce{{::$id}} .sk-double-bounce2 {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s; }\n\n@-webkit-keyframes sk-doubleBounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes sk-doubleBounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n</style>\n<div class="sk-spinner{{::$id}} sk-spinner-double-bounce{{::$id}}">\n  <div class="sk-double-bounce1"></div>\n  <div class="sk-double-bounce2"></div>\n</div>\n</div>'
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=skDoubleBounce.js.map

(function() {
  'use strict';
  angular.module('ui.spinkit').directive('skWanderingCubes', [
    '$uiSpinkitConfig', function($uiSpinkitConfig) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          size: '@size',
          color: '@color'
        },
        link: function(scope) {
          return scope.color = scope.color || $uiSpinkitConfig.defaultColor;
        },
        template: '<div>\n<style>\n.sk-spinner-wandering-cubes{{::$id}}.sk-spinner{{::$id}} {\n  margin: 0 auto;\n  width: 32px;\n  height: 32px;\n  position: relative; }\n.sk-spinner-wandering-cubes{{::$id}} .sk-cube1{{::$id}}, .sk-spinner-wandering-cubes{{::$id}} .sk-cube2{{::$id}} {\n  background-color: {{::color}};\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-wanderingCubeMove 1.8s infinite ease-in-out;\n          animation: sk-wanderingCubeMove 1.8s infinite ease-in-out; }\n.sk-spinner-wandering-cubes{{::$id}} .sk-cube2{{::$id}} {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s; }\n\n@-webkit-keyframes sk-wanderingCubeMove {\n  25% {\n    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n            transform: translateX(42px) rotate(-90deg) scale(0.5); }\n\n  50% {\n    /* Hack to make FF rotate in the right direction */\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n            transform: translateX(42px) translateY(42px) rotate(-179deg); }\n\n  50.1% {\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n            transform: translateX(42px) translateY(42px) rotate(-180deg); }\n\n  75% {\n    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n            transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5); }\n\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg); } }\n\n@keyframes sk-wanderingCubeMove {\n  25% {\n    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n            transform: translateX(42px) rotate(-90deg) scale(0.5); }\n\n  50% {\n    /* Hack to make FF rotate in the right direction */\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n            transform: translateX(42px) translateY(42px) rotate(-179deg); }\n\n  50.1% {\n    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n            transform: translateX(42px) translateY(42px) rotate(-180deg); }\n\n  75% {\n    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n            transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5); }\n\n  100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg); } }\n</style>\n<div class="sk-spinner{{::$id}} sk-spinner-wandering-cubes{{::$id}}">\n  <div class="sk-cube1{{::$id}}"></div>\n  <div class="sk-cube2{{::$id}}"></div>\n</div>\n</div>'
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=skWanderingCubes.js.map

(function() {
  'use strict';
  angular.module('ui.spinkit').directive('skWave', [
    '$uiSpinkitConfig', function($uiSpinkitConfig) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          size: '@size',
          color: '@color'
        },
        link: function(scope) {
          scope.size = scope.size || $uiSpinkitConfig.defaultSize;
          return scope.color = scope.color || $uiSpinkitConfig.defaultColor;
        },
        template: '<div>\n<style>\n.sk-spinner-wave{{::$id}}.sk-spinner{{::$id}} {\n  margin: 0 auto;\n  width: {{::(size*4)}}px;\n  height: {{::size}}px;\n  text-align: center;\n  font-size: 10px; }\n.sk-spinner-wave{{::$id}} div {\n  background-color: {{::color}};\n  height: 100%;\n  width: {{::(size / 5)}}px;\n  display: inline-block;\n  -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n          animation: sk-waveStretchDelay 1.2s infinite ease-in-out; }\n.sk-spinner-wave{{::$id}} .sk-rect2 {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s; }\n.sk-spinner-wave{{::$id}} .sk-rect3 {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s; }\n.sk-spinner-wave{{::$id}} .sk-rect4 {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s; }\n.sk-spinner-wave{{::$id}} .sk-rect5 {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-waveStretchDelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4);\n            transform: scaleY(0.4); }\n\n  20% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); } }\n\n@keyframes sk-waveStretchDelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4);\n            transform: scaleY(0.4); }\n\n  20% {\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1); } }\n</style>\n<div class="sk-spinner{{::$id}} sk-spinner-wave{{::$id}}">\n  <div class="sk-rect1"></div>\n  <div class="sk-rect2"></div>\n  <div class="sk-rect3"></div>\n  <div class="sk-rect4"></div>\n  <div class="sk-rect5"></div>\n</div>\n</div>'
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=skWave.js.map

(function() {
  'use strict';
  angular.module('ui.spinkit').directive('skPulse', [
    '$uiSpinkitConfig', function($uiSpinkitConfig) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          size: '@size',
          color: '@color'
        },
        link: function(scope) {
          scope.size = scope.size || $uiSpinkitConfig.defaultSize;
          return scope.color = scope.color || $uiSpinkitConfig.defaultColor;
        },
        template: '<div>\n<style>\n.sk-spinner-pulse{{::$id}}.sk-spinner{{::$id}} {\n  width: {{::size}}px;\n  height: {{::size}}px;\n  margin: 0 auto;\n  background-color: {{::color}};\n  border-radius: 100%;\n  -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;\n          animation: sk-pulseScaleOut 1s infinite ease-in-out; }\n\n@-webkit-keyframes sk-pulseScaleOut {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; } }\n\n@keyframes sk-pulseScaleOut {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; } }\n</style>\n<div class="sk-spinner{{::$id}} sk-spinner-pulse{{::$id}}"></div>\n</div>'
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=skPulse.js.map

(function() {
  'use strict';
  angular.module('ui.spinkit').directive('skChasingDots', [
    '$uiSpinkitConfig', function($uiSpinkitConfig) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          size: '@size',
          color: '@color'
        },
        link: function(scope) {
          scope.size = scope.size || $uiSpinkitConfig.defaultSize;
          return scope.color = scope.color || $uiSpinkitConfig.defaultColor;
        },
        template: '<div>\n<style>\n.sk-spinner-chasing-dots{{::$id}}.sk-spinner{{::$id}} {\n  margin: 0 auto;\n  width: {{::size}}px;\n  height: {{::size}}px;\n  position: relative;\n  text-align: center;\n  -webkit-animation: sk-chasingDotsRotate 2s infinite linear;\n          animation: sk-chasingDotsRotate 2s infinite linear; }\n.sk-spinner-chasing-dots{{::$id}} .sk-dot1{{::$id}}, .sk-spinner-chasing-dots{{::$id}} .sk-dot2{{::$id}} {\n  width: 60%;\n  height: 60%;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  background-color: {{::color}};\n  border-radius: 100%;\n  -webkit-animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n          animation: sk-chasingDotsBounce 2s infinite ease-in-out; }\n.sk-spinner-chasing-dots{{::$id}} .sk-dot2{{::$id}} {\n  top: auto;\n  bottom: 0px;\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s; }\n\n@-webkit-keyframes sk-chasingDotsRotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes sk-chasingDotsRotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@-webkit-keyframes sk-chasingDotsBounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes sk-chasingDotsBounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n\n  50% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n</style>\n<div class="sk-spinner{{::$id}} sk-spinner-chasing-dots{{::$id}}">\n  <div class="sk-dot1{{::$id}}"></div>\n  <div class="sk-dot2{{::$id}}"></div>\n</div>\n</div>'
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=skChasingDots.js.map

(function() {
  'use strict';
  angular.module('ui.spinkit').directive('skThreeBounce', [
    '$uiSpinkitConfig', function($uiSpinkitConfig) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          size: '@size',
          color: '@color'
        },
        link: function(scope) {
          scope.size = scope.size || $uiSpinkitConfig.defaultSize;
          return scope.color = scope.color || $uiSpinkitConfig.defaultColor;
        },
        template: '<div>\n<style>\n.sk-spinner-three-bounce{{::$id}}.sk-spinner{{::$id}} {\n  margin: 0 auto;\n  width: {{::((size * 3) + 10) }}px;\n  text-align: center; }\n.sk-spinner-three-bounce{{::$id}} div {\n  width: {{::size}}px;\n  height: {{::size}}px;\n  background-color: {{::color}};\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-threeBounceDelay 1.4s infinite ease-in-out;\n          animation: sk-threeBounceDelay 1.4s infinite ease-in-out;\n  /* Prevent first frame from flickering when animation starts */\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both; }\n.sk-spinner-three-bounce{{::$id}} .sk-bounce1{{::$id}} {\n  -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s; }\n.sk-spinner-three-bounce{{::$id}} .sk-bounce2{{::$id}} {\n  -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s; }\n\n@-webkit-keyframes sk-threeBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes sk-threeBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n</style>\n<div class="sk-spinner{{::$id}} sk-spinner-three-bounce{{::$id}}">\n  <div class="sk-bounce1{{::$id}}"></div>\n  <div class="sk-bounce2{{::$id}}"></div>\n  <div class="sk-bounce3{{::$id}}"></div>\n</div>\n</div>'
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=skThreeBounce.js.map

(function() {
  'use strict';
  angular.module('ui.spinkit').directive('skCircle', [
    '$uiSpinkitConfig', function($uiSpinkitConfig) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          size: '@size',
          color: '@color'
        },
        link: function(scope) {
          scope.size = scope.size || $uiSpinkitConfig.defaultSize;
          return scope.color = scope.color || $uiSpinkitConfig.defaultColor;
        },
        template: '<div>\n<style>\n.sk-spinner-circle{{::$id}}.sk-spinner{{::$id}} {\n  margin: 0 auto;\n  width: {{::size}}px;\n  height: {{::size}}px;\n  position: relative; }\n.sk-spinner-circle{{::$id}} .sk-circle{{::$id}} {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n.sk-spinner-circle{{::$id}} .sk-circle{{::$id}}:before {\n  content: \'\';\n  display: block;\n  margin: 0 auto;\n  width: 20%;\n  height: 20%;\n  background-color: {{::color}};\n  border-radius: 100%;\n  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out;\n          animation: sk-circleBounceDelay 1.2s infinite ease-in-out;\n  /* Prevent first frame from flickering when animation starts */\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both; }\n.sk-spinner-circle{{::$id}} .sk-circle2{{::$id}} {\n  -webkit-transform: rotate(30deg);\n      -ms-transform: rotate(30deg);\n          transform: rotate(30deg); }\n.sk-spinner-circle{{::$id}} .sk-circle3{{::$id}} {\n  -webkit-transform: rotate(60deg);\n      -ms-transform: rotate(60deg);\n          transform: rotate(60deg); }\n.sk-spinner-circle{{::$id}} .sk-circle4{{::$id}} {\n  -webkit-transform: rotate(90deg);\n      -ms-transform: rotate(90deg);\n          transform: rotate(90deg); }\n.sk-spinner-circle{{::$id}} .sk-circle5{{::$id}} {\n  -webkit-transform: rotate(120deg);\n      -ms-transform: rotate(120deg);\n          transform: rotate(120deg); }\n.sk-spinner-circle{{::$id}} .sk-circle6{{::$id}} {\n  -webkit-transform: rotate(150deg);\n      -ms-transform: rotate(150deg);\n          transform: rotate(150deg); }\n.sk-spinner-circle{{::$id}} .sk-circle7{{::$id}} {\n  -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n          transform: rotate(180deg); }\n.sk-spinner-circle{{::$id}} .sk-circle8{{::$id}} {\n  -webkit-transform: rotate(210deg);\n      -ms-transform: rotate(210deg);\n          transform: rotate(210deg); }\n.sk-spinner-circle{{::$id}} .sk-circle9{{::$id}} {\n  -webkit-transform: rotate(240deg);\n      -ms-transform: rotate(240deg);\n          transform: rotate(240deg); }\n.sk-spinner-circle{{::$id}} .sk-circle10{{::$id}} {\n  -webkit-transform: rotate(270deg);\n      -ms-transform: rotate(270deg);\n          transform: rotate(270deg); }\n.sk-spinner-circle{{::$id}} .sk-circle11{{::$id}} {\n  -webkit-transform: rotate(300deg);\n      -ms-transform: rotate(300deg);\n          transform: rotate(300deg); }\n.sk-spinner-circle{{::$id}} .sk-circle12{{::$id}} {\n  -webkit-transform: rotate(330deg);\n      -ms-transform: rotate(330deg);\n          transform: rotate(330deg); }\n.sk-spinner-circle{{::$id}} .sk-circle2{{::$id}}:before {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s; }\n.sk-spinner-circle{{::$id}} .sk-circle3{{::$id}}:before {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s; }\n.sk-spinner-circle{{::$id}} .sk-circle4{{::$id}}:before {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s; }\n.sk-spinner-circle{{::$id}} .sk-circle5{{::$id}}:before {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s; }\n.sk-spinner-circle{{::$id}} .sk-circle6{{::$id}}:before {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s; }\n.sk-spinner-circle{{::$id}} .sk-circle7{{::$id}}:before {\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s; }\n.sk-spinner-circle{{::$id}} .sk-circle8{{::$id}}:before {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s; }\n.sk-spinner-circle{{::$id}} .sk-circle9{{::$id}}:before {\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s; }\n.sk-spinner-circle{{::$id}} .sk-circle10{{::$id}}:before {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s; }\n.sk-spinner-circle{{::$id}} .sk-circle11{{::$id}}:before {\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s; }\n.sk-spinner-circle{{::$id}} .sk-circle12{{::$id}}:before {\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes sk-circleBounceDelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n</style>\n<div class="sk-spinner{{::$id}} sk-spinner-circle{{::$id}}">\n  <div class="sk-circle1{{::$id}} sk-circle{{::$id}}"></div>\n  <div class="sk-circle2{{::$id}} sk-circle{{::$id}}"></div>\n  <div class="sk-circle3{{::$id}} sk-circle{{::$id}}"></div>\n  <div class="sk-circle4{{::$id}} sk-circle{{::$id}}"></div>\n  <div class="sk-circle5{{::$id}} sk-circle{{::$id}}"></div>\n  <div class="sk-circle6{{::$id}} sk-circle{{::$id}}"></div>\n  <div class="sk-circle7{{::$id}} sk-circle{{::$id}}"></div>\n  <div class="sk-circle8{{::$id}} sk-circle{{::$id}}"></div>\n  <div class="sk-circle9{{::$id}} sk-circle{{::$id}}"></div>\n  <div class="sk-circle10{{::$id}} sk-circle{{::$id}}"></div>\n  <div class="sk-circle11{{::$id}} sk-circle{{::$id}}"></div>\n  <div class="sk-circle12{{::$id}} sk-circle{{::$id}}"></div>\n</div>\n</div>'
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=skCircle.js.map

(function() {
  'use strict';
  angular.module('ui.spinkit').directive('skCubeGrid', [
    '$uiSpinkitConfig', function($uiSpinkitConfig) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          size: '@size',
          color: '@color'
        },
        link: function(scope) {
          scope.size = scope.size || $uiSpinkitConfig.defaultSize;
          return scope.color = scope.color || $uiSpinkitConfig.defaultColor;
        },
        template: '<div>\n<style>\n.sk-spinner-cube-grid{{::$id}} {\n  /*\n   * Spinner positions\n   * 1 2 3\n   * 4 5 6\n   * 7 8 9\n   */ }\n  .sk-spinner-cube-grid{{::$id}}.sk-spinner{{::$id}} {\n    width: {{::size}}px;\n    height: {{::size}}px;\n    margin: 0 auto; }\n  .sk-spinner-cube-grid{{::$id}} .sk-cube{{::$id}} {\n    width: 33%;\n    height: 33%;\n    background-color: {{::color}};\n    float: left;\n    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out; }\n  .sk-spinner-cube-grid{{::$id}} .sk-cube{{::$id}}:nth-child(1) {\n    -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s; }\n  .sk-spinner-cube-grid{{::$id}} .sk-cube{{::$id}}:nth-child(2) {\n    -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s; }\n  .sk-spinner-cube-grid{{::$id}} .sk-cube{{::$id}}:nth-child(3) {\n    -webkit-animation-delay: 0.4s;\n            animation-delay: 0.4s; }\n  .sk-spinner-cube-grid{{::$id}} .sk-cube{{::$id}}:nth-child(4) {\n    -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s; }\n  .sk-spinner-cube-grid{{::$id}} .sk-cube{{::$id}}:nth-child(5) {\n    -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s; }\n  .sk-spinner-cube-grid{{::$id}} .sk-cube{{::$id}}:nth-child(6) {\n    -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s; }\n  .sk-spinner-cube-grid{{::$id}} .sk-cube{{::$id}}:nth-child(7) {\n    -webkit-animation-delay: 0s;\n            animation-delay: 0s; }\n  .sk-spinner-cube-grid{{::$id}} .sk-cube{{::$id}}:nth-child(8) {\n    -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s; }\n  .sk-spinner-cube-grid{{::$id}} .sk-cube{{::$id}}:nth-child(9) {\n    -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s; }\n\n@-webkit-keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n            transform: scale3D(1, 1, 1); }\n\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n            transform: scale3D(0, 0, 1); } }\n\n@keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n            transform: scale3D(1, 1, 1); }\n\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n            transform: scale3D(0, 0, 1); } }\n</style>\n <div class="sk-spinner{{::$id}} sk-spinner-cube-grid{{::$id}}">\n <div class="sk-cube{{::$id}}"></div>\n <div class="sk-cube{{::$id}}"></div>\n <div class="sk-cube{{::$id}}"></div>\n <div class="sk-cube{{::$id}}"></div>\n <div class="sk-cube{{::$id}}"></div>\n <div class="sk-cube{{::$id}}"></div>\n <div class="sk-cube{{::$id}}"></div>\n <div class="sk-cube{{::$id}}"></div>\n <div class="sk-cube{{::$id}}"></div>\n </div></div>'
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=skCubeGrid.js.map

(function() {
  'use strict';
  angular.module('ui.spinkit').directive('skWordpress', [
    '$uiSpinkitConfig', function($uiSpinkitConfig) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          size: '@size',
          color: '@color'
        },
        link: function(scope) {
          scope.size = scope.size || $uiSpinkitConfig.defaultSize;
          scope.innerCircleSize = scope.size / 4;
          return scope.color = scope.color || $uiSpinkitConfig.defaultColor;
        },
        template: '<div>\n<style>\n.sk-spinner-wordpress{{::$id}}.sk-spinner{{::$id}} {\n  background-color: {{::color}};\n  width: {{::size}}px;\n  height: {{::size}}px;\n  border-radius: {{::size}}px;\n  position: relative;\n  margin: 0 auto;\n  -webkit-animation: sk-innerCircle 1s linear infinite;\n          animation: sk-innerCircle 1s linear infinite; }\n.sk-spinner-wordpress{{::$id}} .sk-inner-circle{{::$id}} {\n  display: block;\n  background-color: #fff;\n  width: {{::innerCircleSize}}px;\n  height: {{::innerCircleSize}}px;\n  position: absolute;\n  border-radius: {{::innerCircleSize}}px;\n  top: 5px;\n  left: 5px; }\n\n@-webkit-keyframes sk-innerCircle {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes sk-innerCircle {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n</style>\n<div class="sk-spinner{{::$id}} sk-spinner-wordpress{{::$id}}">\n  <span class="sk-inner-circle{{::$id}}"></span>\n  </div>\n</div>'
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=skWordpress.js.map

(function() {
  'use strict';
  angular.module('ui.spinkit').directive('skRandom', [
    '$compile', '$uiSpinkitConfig', function($compile, $uiSpinkitConfig) {
      var theDirectives;
      theDirectives = ['sk-rotating-plane', 'sk-double-bounce', 'sk-wave', 'sk-wandering-cubes', 'sk-pulse', 'sk-chasing-dots', 'sk-three-bounce', 'sk-circle', 'sk-cube-grid', 'sk-wordpress', 'sk-fading-circle'];
      return {
        replace: true,
        scope: {
          size: '@size',
          color: '@color'
        },
        link: function(scope, elem) {
          var directiveIndex, theDirective, toAdd;
          directiveIndex = Math.floor(Math.random() * (theDirectives.length - 1) + 1);
          theDirective = theDirectives[directiveIndex];
          scope.size = scope.size || $uiSpinkitConfig.defaultSize;
          scope.color = scope.color || $uiSpinkitConfig.defaultColor;
          toAdd = $compile("<div " + theDirective + " size='{{::size}}' color='{{::color}}'></div>")(scope);
          return elem.append(toAdd);
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=skRandom.js.map

(function() {
  'use strict';
  angular.module('ui.spinkit').directive('skFadingCircle', [
    '$uiSpinkitConfig', function($uiSpinkitConfig) {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          size: '@size',
          color: '@color'
        },
        link: function(scope) {
          scope.size = scope.size || $uiSpinkitConfig.defaultSize;
          return scope.color = scope.color || $uiSpinkitConfig.defaultColor;
        },
        template: '<div>\n<style>\n.sk-spinner-fading-circle{{::$id}}.sk-spinner{{::$id}} {\n  margin: 0 auto;\n  width: {{::size}}px;\n  height: {{::size}}px;\n  position: relative; }\n.sk-spinner-fading-circle{{::$id}} .sk-circle{{::$id}} {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n.sk-spinner-fading-circle{{::$id}} .sk-circle{{::$id}}:before {\n  content: \'\';\n  display: block;\n  margin: 0 auto;\n  width: 18%;\n  height: 18%;\n  background-color: {{::color}};\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out;\n          animation: sk-circleFadeDelay 1.2s infinite ease-in-out;\n  /* Prevent first frame from flickering when animation starts */\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both; }\n.sk-spinner-fading-circle{{::$id}} .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n      -ms-transform: rotate(30deg);\n          transform: rotate(30deg); }\n.sk-spinner-fading-circle{{::$id}} .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n      -ms-transform: rotate(60deg);\n          transform: rotate(60deg); }\n.sk-spinner-fading-circle{{::$id}} .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n      -ms-transform: rotate(90deg);\n          transform: rotate(90deg); }\n.sk-spinner-fading-circle{{::$id}} .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n      -ms-transform: rotate(120deg);\n          transform: rotate(120deg); }\n.sk-spinner-fading-circle{{::$id}} .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n      -ms-transform: rotate(150deg);\n          transform: rotate(150deg); }\n.sk-spinner-fading-circle{{::$id}} .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n          transform: rotate(180deg); }\n.sk-spinner-fading-circle{{::$id}} .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n      -ms-transform: rotate(210deg);\n          transform: rotate(210deg); }\n.sk-spinner-fading-circle{{::$id}} .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n      -ms-transform: rotate(240deg);\n          transform: rotate(240deg); }\n.sk-spinner-fading-circle{{::$id}} .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n      -ms-transform: rotate(270deg);\n          transform: rotate(270deg); }\n.sk-spinner-fading-circle{{::$id}} .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n      -ms-transform: rotate(300deg);\n          transform: rotate(300deg); }\n.sk-spinner-fading-circle{{::$id}} .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n      -ms-transform: rotate(330deg);\n          transform: rotate(330deg); }\n.sk-spinner-fading-circle{{::$id}} .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s; }\n.sk-spinner-fading-circle{{::$id}} .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s; }\n.sk-spinner-fading-circle{{::$id}} .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s; }\n.sk-spinner-fading-circle{{::$id}} .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s; }\n.sk-spinner-fading-circle{{::$id}} .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s; }\n.sk-spinner-fading-circle{{::$id}} .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s; }\n.sk-spinner-fading-circle{{::$id}} .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s; }\n.sk-spinner-fading-circle{{::$id}} .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s; }\n.sk-spinner-fading-circle{{::$id}} .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s; }\n.sk-spinner-fading-circle{{::$id}} .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s; }\n.sk-spinner-fading-circle{{::$id}} .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n\n  40% {\n    opacity: 1; } }\n</style>\n<div class="sk-spinner{{::$id}} sk-spinner-fading-circle{{::$id}}">\n   <div class="sk-circle1 sk-circle{{::$id}}"></div>\n   <div class="sk-circle2 sk-circle{{::$id}}"></div>\n   <div class="sk-circle3 sk-circle{{::$id}}"></div>\n   <div class="sk-circle4 sk-circle{{::$id}}"></div>\n   <div class="sk-circle5 sk-circle{{::$id}}"></div>\n   <div class="sk-circle6 sk-circle{{::$id}}"></div>\n   <div class="sk-circle7 sk-circle{{::$id}}"></div>\n   <div class="sk-circle8 sk-circle{{::$id}}"></div>\n   <div class="sk-circle9 sk-circle{{::$id}}"></div>\n   <div class="sk-circle10 sk-circle{{::$id}}"></div>\n   <div class="sk-circle11 sk-circle{{::$id}}"></div>\n   <div class="sk-circle12 sk-circle{{::$id}}"></div>\n</div>\n</div>'
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=skFadingCircle.js.map

(function() {
  'use strict';
  angular.module('ui.spinkit').provider('$uiSpinkitConfig', function() {
    var config;
    config = {
      defaultColor: '#333',
      defaultSize: 40
    };
    return {
      setDefaultColor: function(newDefaultColor) {
        return config.defaultColor = newDefaultColor;
      },
      setDefaultSize: function(newDefaultSize) {
        return config.defaultSize = newDefaultSize;
      },
      $get: function() {
        return config;
      }
    };
  });

}).call(this);

//# sourceMappingURL=uiSpinkitConfig.js.map
