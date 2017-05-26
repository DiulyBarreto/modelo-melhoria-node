(function(){
    'use strict';

    angular.module('app')
        .directive('ngMenu', ngMenu);

    function ngMenu() {
        return {
            restrict: 'E',
            templateUrl: '../templates/directives/ng-menu.html',
            scope: {
                languages: '=',
                limit: '@'
            }
        };
    };
})();