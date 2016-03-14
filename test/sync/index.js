
((module) => {
	'use strict';

	var child_process = require('child_process');
	var compile = require('../../g++-sync.js');

	var test_result = Object.create(null);

	test_result.version = compile.version();

	try {
		let throwIf = (error) => {
			if (error) throw error;
		};
		let flags = [
			'-Wall', '-Wextra',
			compile.INCLUDE('./include'),
			compile.STANDARD('c++14')
		];
		let compile_result = compile(flags, './main.exe', './main.cpp');
		throwIf(compile_result.error);
		throwIf(String(compile_result.stderr));
		let execute_result = child_process.spawnSync('./main.exe');
		test_result.stdout = execute_result.stdout;
		test_result.stderr = execute_result.stderr;
		test_result.status = execute_result.status;
	} catch (error) {
		test_result.error = error;
	}

	module.exports = test_result;

})(module);
