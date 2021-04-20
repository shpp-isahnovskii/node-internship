const fs = require('fs');

module.exports.sortData = (data, param) => {
	return data.sort((a,b) => {
		if (a[param] > b[param]) {
			return 1;
		}
		if (a[param] < b[param]) {
			return -1;
		}
		return 0;
	});
}

module.exports.saveData = (data) => {
	fs.writeFile('./gifs/file.json', data, 'utf8', (err) => {
		if (err) throw err;
	});
}