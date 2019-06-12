const sodium = require('sodium-universal')

module.exports = derive

function derive (ns, masterKey, input, output) {
  if (!output) output = Buffer.alloc(32)

  sodium.crypto_generichash_batch(output, [
    Buffer.from(Buffer.byteLength(ns, 'ascii') + '\n' + ns, 'ascii'),
    Buffer.isBuffer(input) ? input : Buffer.from(input)
  ], masterKey)

  return output
}
