/* jshint esversion: 6 */
(function () {
	'use strict';

	const express = require('express');
	const modeloCtrl = require('../controllers/modelo-controller');

	let router = express.Router();

	router.route('/buscar').get((request, response) => {
		let modelos = modeloCtrl.buscar();
		response.status(200).json(modelos);
	});

	router.route('/salvar').post((request, response) => {
		modeloCtrl.salvar(request.body);
		response.sendStatus(201);
	});

	module.exports = router;
})();