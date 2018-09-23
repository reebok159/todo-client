(function() {
  'use strict';

  angular
    .module('todoListClient')
    .directive('egnNavbar', egnNavbar);

  /** @ngInject */
  function egnNavbar() {
    var directive = {
      restrict: 'E',
      template: require('./navbar.html'),
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      //vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
