
((module) => {
	'use strict';

	var result = module.exports = Object.create(null);
	['GCC'].forEach((pname) => result[pname] = require(`./${pname}.js`));

})(module);
