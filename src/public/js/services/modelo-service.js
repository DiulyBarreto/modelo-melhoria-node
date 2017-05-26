/* jshint esversion: 6 */
(function () {
    'use strict';

    angular
        .module('app')
        .service('modeloService', ['$http', modeloService]);

    function modeloService($http) {
        let self = this;
        const urlBase = `${location.origin}/modelo`;

        self.buscar = function () {
            return $http({
                method: 'GET',
                url: `${urlBase}/buscar`
            });
        };

        self.salvar = function (modelo) {
            return $http({
                method: 'POST',
                url: `${urlBase}/salvar`,
                data: {id: modelo}
            });
        };
    }
})();