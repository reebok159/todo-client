(function() {
  'use strict';

  angular
    .module('todoListClient')
    .factory('Task', function(railsResourceFactory) {
      var relation = railsResourceFactory({
        url: process.env.API_HOST + "/api/v1/projects/{{projectId}}/tasks/{{id}}",
        name: 'task'
      });

      return relation;
    });
})();
