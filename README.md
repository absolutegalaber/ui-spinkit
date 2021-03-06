# ui-spinkit
===============

Configurable SpinKit (https://github.com/tobiasahlin/SpinKit) spinners for AngularJS
Inspired by [angular-spinkit](https://github.com/Urigo/angular-spinkit).

See it in action [here](http://jsbin.com/gazixopere/edit?html,output)

## Usage
1. Install with bower:
    ```javascript
    bower install ui-spinkit --save
    ```

2. Add uiSpinkit.js to your main file (index.html)
    ```html
    <script src="bower_components/ui-spinkit/dist/uiSpinkit.js"></script>
    ```
    or uiSpinkit.min.js if you don't minify you dependecies within your build anyway: 
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
    <div sk-double-bounce></div>
    <div sk-double-bounce size="60" color="red"></div>
    <div sk-wave></div>
    <div sk-wave width="150" height="75" color="red"></div>
    <div sk-wandering-cubes></div>
    <div sk-wandering-cubes color="red"></div>
    <div sk-pulse></div>
    <div sk-pulse size="120" color="red"></div>
    <div sk-chasing-dots></div>
    <div sk-chasing-dots size="120" color="red"></div>
    <div sk-three-bounce></div>
    <div sk-three-bounce width="200" height="40" color="red"></div>
    <div sk-circle></div>
    <div sk-circle size="100" color="red"></div>
    <div sk-cube-grid></div>
    <div sk-cube-grid size="100" color="red"></div>
    <div sk-wordpress></div>
    <div sk-wordpress size="100" color="red"></div>
    <div sk-fading-circle></div>
    <div sk-fading-circle size="60" color="#5B760F"></div>
    ```
    
5. Configure Defaults as you require them:
    Currently there are only two Options:
    ```javascript
    myapp = angular.module('myapp', ['ui.spinkit'])
    myapp.config(['$uiSpinkitConfigProvider',function($uiSpinkitConfigProvider){
          $uiSpinkitConfigProvider.setDefaultSize(50);
          $uiSpinkitConfigProvider.setDefaultColor('#000000');
    })]
    ```

6. Add all your requests / problems / ideas / bug fixes in the issues area or send us a pull request!

##Build Locally
1. Clone it

2. Build it
    ```bash
    npm install
    bower install
    grunt 
    ```

3. Check it out
Open index.html in a browser 

## What remains to be done.
1. Add some jasmine tests.
2. Add example to JSFiddle.
3. ~~Add $uiSpinkitConfigProvider to override defaults.~~
4. ~~Add a funky "RandomSpinner".~~
5. Add an "ImageLoaderSpinner" like angular-spinkit.
6. Add show/hide callback mechanism