/* jshint esversion: 6 */
(function () {
	'use strict';

	const express = require('express');
	const ejs = require('ejs');
	const modeloRoutes = require('./src/server/routes/modelo');
	const bodyParser = require('body-parser');
	const port = 3000;

	let app = express();

	app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use(bodyParser.urlencoded({
        extended: false
    }));

    app.use(bodyParser.json());
	
	app.use(express.static('node_modules'));
	app.use(express.static('src/public'));

	app.set('views', 'src/public');
	app.engine('html', ejs.renderFile);


	app.use('/modelo/', modeloRoutes);


	app.listen(port, (err) => {
		if (err) {
			return console.log('something bad happened', err);
		}
		console.log(`server is listening on ${port}`);
	});

})();