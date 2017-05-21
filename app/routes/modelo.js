module.exports = function(app) {
	app.get('/modelo/cadastroModelo', function(req, res) {
		app.app.controllers.modelo.cadastrarModelo(app, req, res);
	});

	app.post('/modelo/salvar', function(req, res) {
		app.app.controllers.modelo.salvarModelo(app, req, res);
	});

	app.get('/modelo/visualizacaoModelos', function(req, res) {
		app.app.controllers.modelo.visualizarModelos(app, req, res);
	});
};