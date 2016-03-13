
((module) => {
	'use strict';

	module.exports = Object.freeze({
		'STANDARD': (standard) => `std=${standard}`,
		'OPTIMIZE': (level) => `-O{level}`,
		'INCLUDE': (...dirs) => dirs.map((dir) => `-I"${dir}"`),
		'DEBUG': '-g',
		'GENERATE_OBJECT': '-c',
		'GENERATE_ASSEMBLY': '-S',
		__proto__() {}
	});

})(module);
