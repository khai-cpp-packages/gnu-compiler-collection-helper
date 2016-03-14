
(() => {
	'use strict';

	process.chdir(__dirname);
	console.log('\x1B[36mTESTING:\x1B[0m g++-async');

	setTimeout(() => require('.'));

})();
