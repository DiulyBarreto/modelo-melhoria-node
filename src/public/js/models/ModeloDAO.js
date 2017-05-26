/* jshint esversion: 6 */

(function () {
	function ModeloDAO(connection) {
		this._connection = connection;
	}

	ModeloDAO.prototype.getModelos = callback => {
		this._connection.query('select * from Modelo', callback);
	};

	ModeloDAO.prototype.getModeloEspecifico = this.getModeloEspecifico = callback => {
		this._connection.query('select * from Modelo where idModelo = 1', callback);
	};

	ModeloDAO.prototype.salvarModelo = (modelo, callback) => {
		this._connection.query('insert into Modelo set ? ', modelo, callback);
	};


	module.exports = app => {
		return ModeloDAO;
	};
})();