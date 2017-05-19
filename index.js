var http = require('http');

var server = http.createServer( function(req, res) {
	var modelo = req.url;

	res.end("<html><body><h2>Bem-Vindo</h2></body></html>");
}).listen(3000);