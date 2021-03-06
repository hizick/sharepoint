﻿(function () {
  'use strict';

  // create the app
  var app = angular.module('app', [
    // ootb angular modules
    'ngRoute',      // app route (url path) support
    'ngCookies', //for coookies
    'ngSanitize',   // fixes HTML issues in data binding

    // my custom modules
    'common'
  ]);

  // wire up routing for errors & success events
  app.run(['$route', function($route) {
    // run any code that needs to execute prior to the app actually starting up
  }]);
})();