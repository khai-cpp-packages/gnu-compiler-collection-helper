
# gnu-compiler-collection-helper

## Requirements

 * Node >= 5.0.0, with flag `--es-staging`

 * GCC >= 4.0.0

## Examples

```javascript
var compile = require('gnu-compiler-collection-helper/g++-sync');
try {
	let result = compile(['-Wall'], 'hello-world.exe', 'hello-world.cpp');
	if (result.stderr) throw result.stderr;
	console.log('Compile successful');
} catch (error) {
	console.error(`Compile failed\n${error}`);
};
```
