var mysql = require('mysql');

var connMySql = function() {
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'modelo_melhoria_node'
	});
}

module.exports = function() {
	return connMySql;
}
		