buf = new Buffer.alloc(256)
len = buf.write('hello world');

console.log('octets written : '+len);