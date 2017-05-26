/* jshint esversion: 6 */
(function () {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .config(['$routeProvider', router]);

    function router($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/templates/home/home.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();