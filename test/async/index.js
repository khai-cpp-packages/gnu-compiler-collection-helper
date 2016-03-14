
((module) => {
	'use strict';

	var spawn = require('child_process').spawn;
	var compile = require('../../g++.js');

	compile.version((version) => process.stderr.write(`\n\x1B[92m${version}\x1B[0m`));

	var flags = [
		'-Wall', '-Wextra',
		compile.INCLUDE('./include'),
		compile.STANDARD('c++14')
	];

	module.exports = new Promise((resolve, reject) => {

		var child = compile(flags, './main.exe', './main.cpp');

		child.on('exit', () => {
			var child = spawn('./main.exe');
			child.on('error', reject);
			child.on('exit', () => resolve(child));
		});

		child.on('error', reject);
		child.stderr.on('error', reject);

	});

})(module);
