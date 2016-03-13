
((module) => {
	'use strict';

	var child_process = require('child_process');
	var gnu = require('..');

	var test_result = Object.create(null);

	test_result.version = gnu.cplusplus.version();

	try {
		let throwIf = (error) => {
			if (error) throw error;
		};
		let flags = [
			'-Wall', '-Wextra',
			gnu.cplusplus.INCLUDE('./include'),
			gnu.cplusplus.STANDARD('c++14')
		];
		let compile_result = gnu.cplusplus(flags, './main.exe', './main.cpp');
		throwIf(compile_result.error);
		throwIf(String(compile_result.stderr));
		let execute_result = child_process.spawnSync('./main.exe');
		test_result.stdout = execute_result.stdout;
		test_result.stderr = execute_result.stderr;
	} catch (error) {
		test_result.error = error;
	}

	module.exports = test_result;

})(module);
