const express = require('express');
const HttpRequest = require('./modules/httpsRequest');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.use('/', function (request, response) {
	const data = JSON.parse(fs.readFileSync('./gifs/file.json', 'utf8')).reduce((acc,val) => {
		return [...acc, val.images.original.url];
	},[]) || [];
	response.render('home', {
		gifs: data,
	});
});


app.listen(8080);