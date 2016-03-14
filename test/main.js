
(() => {
	'use strict';

	var spawn = require('child_process').spawn;

	process.chdir(__dirname);

	var sync = spawn('node', ['--es-staging', './sync/main.js']);

	sync.on('error', (error) => process.stderr.write(`TEST SYNC FAILED\n${error}\n`));
	sync.on('exit', (code) => process.stdout.write(`Test Sync exited with code ${code}\n`));
	sync.stdout.on('data', (chunk) => process.stdout.write(String(chunk)));
	sync.stderr.on('data', (chunk) => process.stderr.write(String(chunk)));

})();
