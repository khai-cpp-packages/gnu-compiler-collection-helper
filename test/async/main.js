
(() => {
	'use strict';

	process.chdir(__dirname);

	setTimeout(() => {
		console.log(`${'\n'.repeat(3)}\x1B[36mTESTING:\x1B[0m g++-async`);
		require('.').then(onCompileSuccess, onCompileFail);
	});

	var onCompileSuccess = (child) => {
		[
			`\n\x1B[97m\x1B[1mTEST SUCCEED\x1B[0m\n\n`,
			`\x1B[32mprocess.stdout:\x1B[0m\n${child.stdout}\n`,
			`\x1B[32mprocess.stderr:\x1B[0m\n${child.stderr}\n`,
			`\x1B[32mprocess.status:\x1B[0m\t${child.status}\n`
		].forEach((message) => process.stdout.write(message));
	};

	var onCompileFail = (error) =>
		process.stderr.write(`\n\x1B[97m\x1B[1mTEST FAILED\x1B[0m\n\n${error}\n`);

})();
