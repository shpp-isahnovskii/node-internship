const fs = require('fs');
const stream = require('stream');
const {promisify} = require('util');
const got = require('got');


function saveGif(data, name) {
	const pipeline = promisify(stream.pipeline);
	(async () => {
		await pipeline(
			got.stream(data),
			fs.createWriteStream(`./gifs/${name}.gif`)
		);
	})();
}

module.exports = {
	saveGif,
}