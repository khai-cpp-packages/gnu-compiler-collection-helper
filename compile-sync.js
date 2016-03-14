
((module) => {
	'use strict';

	var spawnSync = require('child_process').spawnSync;

	var info = (compiler, args) =>
		() => String(spawnSync(compiler, args, UTF8).stdout);

	module.exports = require('./compile.template.js')(spawnSync, info);

})(module);
