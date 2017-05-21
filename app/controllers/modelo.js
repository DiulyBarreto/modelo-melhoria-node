module.exports.cadastrarModelo = function(app, req, res) {
	res.render('modelo/cadastroModelo');
}

module.exports.salvarModelo = function(app, req, res) {
	var modelo = req.body;
	var modeloModel = new app.app.models.ModeloDAO(app.config.dbConnection());

	modeloModel.salvarModelo(modelo, function(error, result){
		res.redirect('/modelo/visualizacaoModelos');
	})
}

module.exports.visualizarModelos = function(app, req, res) {
	var modeloModel = new app.app.models.ModeloDAO(app.config.dbConnection());
	modeloModel.getModelos(function(error, result){
		res.render('modelo/visualizacaoModelos', { modelos: result });
	})
}