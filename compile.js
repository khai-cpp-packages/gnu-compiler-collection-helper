
((module) => {
	'use strict';

	var spawn = require('child_process').spawn;

	var info = (compiler, args) => (callback) =>
		spawn(compiler, args).stdout.on('data', (chunk) => callback(String(chunk)));

	module.exports = require('./compile.template.js')(spawn, info);

})(module);
