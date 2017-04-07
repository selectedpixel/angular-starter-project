(function() {
  'use strict';

  angular
    .module('angularStarterProject')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
