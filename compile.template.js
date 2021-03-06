
((module) => {
	'use strict';

	var freeze = Object.freeze;
	var setproto = Object.setPrototypeOf;

	const DEFAULT_FLAGS = freeze(['-Wall', '-Wextra']);
	const DEFAULT_OUTPUT = 'compiled-binary.out';

	const GET_HELP = freeze(['--help']);
	const GET_VERSION = freeze(['--version']);

	var create = (spawn, info) => {

		var collection = Object.create(null);

		var execute = (compiler, flags, output, input, options) =>
			spawn(compiler, [...flags, `-o`, output, ...input], options);

		var create = (compiler) => {

			var result = (flags, output, input, options) =>
				execute(compiler, flags || DEFAULT_FLAGS, output || DEFAULT_OUTPUT, typeof input === 'object' ? input : [input || 'main.cpp'], options);

			setproto(result, {
				name: () => compiler,
				help: info(compiler, GET_HELP),
				version: info(compiler, GET_VERSION),
				__proto__: require('./flags/GCC.js')
			});

			return result;

		};

		return (compiler) =>
			collection[compiler] || (collection[compiler] = create(compiler));

	}

	module.exports = create;

})(module);
