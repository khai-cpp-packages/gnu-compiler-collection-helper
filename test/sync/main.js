
(() => {
	'use strict';

	process.chdir(__dirname);
	console.log('\x1B[36mTESTING:\x1B[0m gnu-compiler-collection-helper');

	setTimeout(() => message(require('.')));

	var message = (test_result) => {
		process.stderr.write(`\n\x1B[92m${test_result.version}\x1B[0m`);
		if (test_result.error) {
			process.stderr.write(`\n\x1B[97m\x1B[1mTEST FAILED\x1B[0m\n\n${test_result.error}\n`);
		} else {
			[
				`\n\x1B[97m\x1B[1mTEST SUCCEED\x1B[0m\n\n`,
				`\x1B[32mprocess.stdout:\x1B[0m\n${test_result.stdout}\n`,
				`\x1B[32mprocess.stderr:\x1B[0m\n${test_result.stderr}\n`
			].forEach((message) => process.stdout.write(message));
		}
	};

})();
