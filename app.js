var app = require('./config/server');

app.get('/', function(req, res) {
	res.send("<html><body><h2>Bem-Vindo</h2></body></html>");
});

app.listen(3000, function(){
	console.log("Servidor ON");
});