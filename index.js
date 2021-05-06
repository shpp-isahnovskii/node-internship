const express = require('express');
const HttpRequest = require('./modules/httpsRequest');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const dir = './gifs'

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'gifs')));
app.set('view engine', 'pug');

app.use('/', async function (request, response) {
	let data = [];
	try {
		const files = await fs.readdir(dir);
		data = files.reduce((acc, file) => {
			return [...acc, `${file}`];
		}, []);
		response.render('home', {
			gifs: data,
		});
	} catch (e) {
		response.render('home', {
			gifs: [],
		});
	}

});


app.listen(8080);