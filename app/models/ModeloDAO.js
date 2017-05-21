function ModeloDAO(connection) {
	this._connection = connection;
}

ModeloDAO.prototype.getModelos = function(callback){
	this._connection.query('select * from Modelo', callback);	
}

ModeloDAO.prototype.getModeloEspecifico = this.getModeloEspecifico  = function(callback) {
	this._connection.query('select * from Modelo where idModelo = 1', callback);
}

ModeloDAO.prototype.salvarModelo = function (modelo, callback) {
	this._connection.query('insert into Modelo set ? ', modelo, callback);
}


module.exports = function(app) {
	return ModeloDAO;
}