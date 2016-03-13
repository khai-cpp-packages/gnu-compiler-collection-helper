
((module) => {
	'use strict';

	module.exports = {
		'cplusplus': require('./g++.js'),
		'c': require('./gcc.js'),
		'flags': require('./flags'),
		'__proto__': null
	};

})(module);
