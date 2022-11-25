buf = new Buffer.alloc(256);

for (var i=0;i<26;i++){
  buf[i]=i+97;
}

//THE FOLLOWING IS THE SYNTAX
//buf.toString([encoding][, start][, end])


console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5))
console.log(buf.toString('utf8',0,5))




