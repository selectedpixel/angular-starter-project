(function() {
  'use strict';

  angular
    .module('angularStarterProject')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
