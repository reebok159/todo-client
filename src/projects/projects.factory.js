(function() {
  'use strict';

  angular
    .module('todoListClient')
    //.service('ProjectsService', ProjectsService);
    .factory('Project', function(railsResourceFactory) {
      return railsResourceFactory({
        url: '/api/v1/projects/{{id}}',
        name: 'project'
      });
    });

})();