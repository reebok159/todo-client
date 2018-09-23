var angular = require('angular');
require('@uirouter/angularjs');
require('angular-toastr');
require('angular-cookie');
require('angular-touch');
require('angular-sanitize');
require('angular-messages');
require('angular-aria');
require('angular-resource');
require('angular-ui-bootstrap');
require('angularjs-rails-resource');
require('ng-token-auth');
const path = require('path');

require('bootstrap');


// util
function importAll(r) {
  r.keys().forEach(r);
}


var app = angular.module('todoListClient', ['ipCookie', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.bootstrap', 'ui.router', 'toastr', 'rails', 'ng-token-auth']);


//import all configs, routes, services, factories, controllers
importAll(require.context('.', true, /\.config\.js$/));
importAll(require.context('.', true, /\.service\.js$/));
importAll(require.context('.', true, /\.controller\.js$/));
importAll(require.context('.', true, /\.factory\.js$/));
importAll(require.context('.', true, /\.directive\.js$/));
importAll(require.context('.', true, /\.route\.js$/));
importAll(require.context('.', true, /\.scss$/));
importAll(require.context('.', true, /\.css$/));
importAll(require.context('.', true, /\.html$/));


//export default angular;
