
(() => {
	'use strict';

	var spawn = require('child_process').spawn;

	process.chdir(__dirname);

	var test = (type) => setTimeout(() => {

		var sync = spawn('node', ['--es-staging', `./${type.toLowerCase()}/main.js`]);

		sync.on('error', (error) => process.stderr.write(`TEST ${type.toUpperCase()} FAILED\n${error}\n`));
		sync.on('exit', (code) => process.stdout.write(`Test ${type} exited with code ${code}\n`));
		sync.stdout.on('data', (chunk) => process.stdout.write(String(chunk)));
		sync.stderr.on('data', (chunk) => process.stderr.write(String(chunk)));

	});

	test('aSync');
	test('Sync');

})();
