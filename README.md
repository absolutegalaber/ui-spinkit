# ui-spinkit
===============

Configurable SpinKit (https://github.com/tobiasahlin/SpinKit) spinners for AngularJS

## Usage
1. Install with bower:
  ```javascript
  bower install ui-spinkit --save
  ```

2. Add uiSpinkit.js or uiSpinkit.min.js  to your main file (index.html)
  ```html
  <script src="bower_components/ui-spinkit/dist/uiSpinkit.js"></script>
  ```
  or
  ```html
  <script src="bower_components/ui-spinkit/dist/uiSpinkit.min.js"></script>
  ```

3. Add `ui-spinkit` as a dependency in your module
  ```javascript
  var myapp = angular.module('myapp', ['ui.spinkit'])
  ```

4. Add Spinners to markup
  ```html
  <div sk-rotating-plane></div>
  <div sk-rotating-plane size="60" color="green"></div>


  ```


6. Add all your requests and ideas in the issues area or send us a pull request!

## Example
You can check out this live example here: http://jsfiddle.net/Urigo/638AA/18/
