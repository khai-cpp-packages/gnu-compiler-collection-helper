
(() => {
	'use strict';

	var spawn = require('child_process').spawn;

	process.chdir(__dirname);

	var createTestCaller = (type) => (resolve) => setTimeout(() => {

		var sync = spawn('node', ['--es-staging', `./${type.toLowerCase()}/main.js`]);

		sync.on('error', (error) => {
			process.stderr.write(`TEST ${type.toUpperCase()} FAILED\n${error}\n`);
			resolve();
		});
		sync.on('exit', (status) => {
			process.stdout.write(`\nTest ${type} exited with status code ${status}${'\n'.repeat(2)}\n`);
			resolve();
		});
		sync.stdout.on('data', (chunk) => process.stdout.write(String(chunk)));
		sync.stderr.on('data', (chunk) => process.stderr.write(String(chunk)));

	});

	var test = (type) =>
		new Promise(createTestCaller(type));

	Promise.all([
		test('aSync'), test('sync')
	]).then(() => {
		process.stdout.write(`${'\n'.repeat(3)}All tests finished.${'\n'.repeat(3)}`);
	});

})();
