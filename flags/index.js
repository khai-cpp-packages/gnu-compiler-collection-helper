
((module) => {
	'use strict';

	var result = module.exports = Object.create(null);
	['g++'].forEach((pname) => result[pname] = require(`./${pname}.js`));

})(module);
