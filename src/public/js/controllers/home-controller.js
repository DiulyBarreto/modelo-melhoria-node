/* jshint esversion: 6 */
(function () {
	angular.module('app')
		.controller('homeController', ['$http', homeController]);

	function homeController($http) {
		let self = this;

		self.teste = ['asd','ddd'];
	}
})();