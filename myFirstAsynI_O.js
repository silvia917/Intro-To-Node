var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
	var newLines = data.toString().split('\n').length;
	console.log(newLines - 1);
})