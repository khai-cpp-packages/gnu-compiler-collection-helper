
(() => {
	'use strict';

	process.chdir(__dirname);
	console.log('Testing: gnu-compiler-collection-helper');

	var test_result = require('.');

	console.log(test_result.version);

	if (test_result.error) {
		process.stderr.write(`TEST FAILED\n${test_result.error}\n`);
	} else {
		process.stdout.write(`TEST SUCCEED\n`);
		process.stdout.write(`\x1B[32mprocess.stdout:\x1B[0m\n${test_result.stdout}\n`);
		process.stdout.write(`\x1B[32mprocess.stderr:\x1B[0m\n${test_result.stderr}\n`);
	}

})();
