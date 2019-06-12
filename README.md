# derive-key

Derive a named key from a master key

```
npm install derive-key
```

## Usage

``` js
const derive = require('derive-key')
const masterKey = crypto.randomBytes(32) // make sure this is cryptographic seed

const key = derive('a namespace', masterKey, 'my-named-key')

console.log('the derived key is:', key)
```

## API

#### `outputKey = derive(namespace, masterKey, name, [outputKey])`

Derive a named key from a 32 byte master key.

The namespace should be an ascii string (fx your application name) and name can be a buffer
or string reflecting the name of the key you want to derive.

Optionally you can pass in the output key parameter and the result will be copied into that
buffer instead of a new buffer being allocated internally.

## License

MIT
