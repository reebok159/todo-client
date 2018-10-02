import myTemplate from './tasks.modals.html';
import myTemplate2 from './tasks.html';

(function() {
  'use strict';

	angular.module('todoListClient')
	  .component('tasksModals', { template: myTemplate })
	  .component('tasksTpl', { template: myTemplate2, bindings: { project: '=' } })

})();
