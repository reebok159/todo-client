var angular = require('angular');
require('@uirouter/angularjs');
const path = require('path');

// util
function importAll(r) {
  r.keys().forEach(r);
}


var app = angular.module('todoListClient', ['ui.router']);





app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider.state('homepage', {
      url: '/',
      template: require('./home/home.html')
  })
  .state('about', {
  	url: '/about',
  	template: require('./home2/home.html')
  })
})

export default angular;
