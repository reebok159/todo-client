(function() {
  'use strict';


  angular
    .module('todoListClient')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    /*$urlRouterProvider.otherwise('/');
    $stateProvider.state('homepage', {
        url: '/',
        template: require('./home/home.html')
    })
    .state('about', {
      url: '/about',
      template: require('./home2/home.html')
    })*/
    $stateProvider
      .state('main', {
        url: '/',
        template: require('./projects/projects.html'),
        controller: 'ProjectsController',
        controllerAs: 'projects',
        resolve: {
          auth: function($auth, $state) {
            //if user isn't logged in, this catch exception
            //and we redirect to login
            $auth.validateUser().catch(function(){

              $state.go('auth.login');
            });
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }
})();

/*

*/
