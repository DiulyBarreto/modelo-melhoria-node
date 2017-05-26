/* jshint esversion: 6 */
(function () {
	angular.module('app')
		.controller('modeloController', ['$http', 'modeloService', modeloController]);

	function modeloController($http, modeloService) {
		let self = this;

		self.modelos = [];
		self.campo = '';

		self.salvar = function () {
			let campo = self.campo;

			modeloService.salvar(campo).then(function (response) {
				console.log(response.data);
				
				self.campo = '';
				self.buscar();

			}, function (error) {
				console.log(error);
			});
		};

		self.buscar = function () {
			modeloService.buscar().then(function (response) {
				self.modelos = response.data;
			}, function (error) {
				console.log(error);
			});
		};

		self.buscar();

	}
})();