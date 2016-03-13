
((module) => {
	'use strict';

	var freeze = Object.freeze;
	var spawnSync = require('child_process').spawnSync;

	const COMPILER = 'g++';
	const DEFAULT_FLAGS = freeze(['-Wall', '-Wextra']);
	const DEFAULT_OUTPUT = 'compiled-binary.out';

	var _compile = (flags, output, input, options) =>
		spawnSync(COMPILER, [...flags, `-o`, `"${output}"`, ...input]);

	var compile = (flags, output, input, options) =>
		_compile(flags || DEFAULT_FLAGS, output || DEFAULT_OUTPUT, typeof input === 'object' ? input : [input || 'main.cpp'], options);

	module.exports = {
		'compile': compile,
		'__proto__': require('./flags/g++.js')
	};

})(module);
