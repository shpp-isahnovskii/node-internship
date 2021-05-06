const https = require('https');
const utility = require('./utility');
const options = {
	hostname: 'api.giphy.com',
	port: 443,
	path: '/v1/gifs/search?q=brilliant&limit=10&rating=g&api_key=kEe5rNMLQnxXNIVfeMbruCM8kNC8dWo0',
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
		Object.values(JSON.parse(body).data).forEach((el, index) => {
			utility.saveGif(el.images.original.url, `${index + 1}`);
		});
		console.log('request completed...');
	});
})

req.end();