
((module) => {
	'use strict';

	var freeze = Object.freeze;
	var setproto = Object.setPrototypeOf;
	var spawnSync = require('child_process').spawnSync;

	const DEFAULT_FLAGS = freeze(['-Wall', '-Wextra']);
	const DEFAULT_OUTPUT = 'compiled-binary.out';

	var collection = Object.create(null);

	var execute = (compiler, flags, output, input, options) =>
		spawnSync(compiler, [...flags, `-o`, `"${output}"`, ...input], options);

	var create = (compiler) => {

		var result = (flags, output, input, options) =>
			execute(compiler, flags || DEFAULT_FLAGS, output || DEFAULT_OUTPUT, typeof input === 'object' ? input : [input || 'main.cpp'], options);

		setproto(result, require('./flags/GCC.js'));

		return result;

	};

	module.exports = (compiler) =>
		collection[compiler] || (collection[compiler] = create(compiler));

})(module);
