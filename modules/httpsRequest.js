const https = require('https');
const utility = require('./utility');
const options = {
	hostname: 'api.giphy.com',
	port: 443,
	path: '/v1/gifs/search?q=brilliant&limit=50&api_key=kEe5rNMLQnxXNIVfeMbruCM8kNC8dWo0',
	method: 'GET',
}

const req = https.request(options, res => {
	let body = '';
	console.log(`statusCode: ${res.statusCode}`)

	res.on('data', d => {
		body += d;
	})
	res.on('error', error => {
		console.error(error)
	})

	res.on('end', () => {
		let preparedData = utility.sortData(JSON.parse(body).data, 'rating').slice(0, 10);
		utility.saveData(JSON.stringify(preparedData));
		console.log('request completed...');
	});
})

req.end();