var angular = require('angular');
const path = require('path');
require('@uirouter/angularjs');

require('angular-toastr');
require('angularjs-rails-resource');
require('ng-token-auth');
require('ng-file-upload');

require('angular-messages');
require('angular-sanitize');
require('angular-touch');
require('angular-cookie');
require('angular-aria');
require('angular-resource');
require('angular-animate');
require('angular-ui-bootstrap');
require('jquery');
require('bootstrap-sass');
require('webpack-icons-installer/bootstrap'); 


// util
function importAll(r) {
  r.keys().forEach(r);
}

var app = angular.module('todoListClient', ['ngAnimate', 'ipCookie', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.bootstrap', 'ui.router', 'toastr', 'rails', 'ng-token-auth', 'ngFileUpload']);


//import all configs, routes, services, factories, controllers
importAll(require.context('.', true, /\.config\.js$/));
importAll(require.context('.', true, /\.service\.js$/));
importAll(require.context('.', true, /\.component\.js$/));
importAll(require.context('.', true, /\.controller\.js$/));
importAll(require.context('.', true, /\.factory\.js$/));
importAll(require.context('.', true, /\.directive\.js$/));
importAll(require.context('.', true, /\.route\.js$/));
importAll(require.context('.', true, /\.scss$/));
importAll(require.context('.', true, /\.css$/));
importAll(require.context('.', true, /\.html$/));



//export default angular;
