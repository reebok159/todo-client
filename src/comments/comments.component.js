import myTemplate from './comments.html';

(function() {
  'use strict';

	angular.module('todoListClient')
	  .component('commentsTpl', { template: myTemplate })

})();
