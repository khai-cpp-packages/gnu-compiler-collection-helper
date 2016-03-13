
((module) => {
	'use strict';

	var freeze = Object.freeze;
	var spawnSync = require('child_process').spawnSync;

	const COMPILER = 'g++';
	const DEFAULT_FLAGS = freeze(['-Wall', '-Wextra']);
	const DEFAULT_OUTPUT = 'compiled-binary.out';

	var compile = (flags, output, input, options) =>
		spawnSync(COMPILER, [...flags, `-o`, `"${output}"`, ...input]);

	module.exports = (flags, output, input, options) =>
		compile(flags || DEFAULT_FLAGS, output || DEFAULT_OUTPUT, typeof input === 'object' ? input : [input || 'main.cpp'], options);

})(module);
