
# gnu-compiler-collection-helper

## Requirements

 * Node >= 5.0.0, with flag `--es-staging`

 * GCC >= 4.0.0

## Examples

### Asynchronous compilation

```javascript
var compile = require('gnu-compiler-collection-helper/g++');
new Promise((resolve, reject) => {
	var child_process = compile(['-Wall']. 'hello-world.exe', 'hello-world.cpp');
	var stderr = '';
	child_process.on('error', reject);
	child_process.on('exit', () => stderr ? reject(stderr) : resolve());
	child_process.stderr.on('data', (chunk) => stderr += chunk);
}).then(
	() => console.log('Compile successful'),
	(error) => console.error(`Compile failed\n${error}`)
);
```

### Synchronous compilation

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
