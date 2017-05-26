/* jshint esversion: 6 */
(function () {
	'use strict';
    var models = ['default'];

    let controller = {};

    controller.buscar = () => models;

    controller.salvar = (modelo) => {
        models.push(modelo.id);
    };

    module.exports = controller;

})();