
((module) => {
	'use strict';

	module.exports = {
		'cplusplus': require('./g++.js'),
		'c': require('./gcc.js'),
		'cplusplusSync': require('./g++-sync.js'),
		'cSync': require('./gcc-sync.js'),
		'flags': require('./flags'),
		'__proto__': null
	};

})(module);
