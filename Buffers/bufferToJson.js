var buf = new Buffer.from('hello world')
var json = buf.toJSON(buf);

console.log(json)


//outputs

// {
//   type: 'Buffer',
//   data: [
//     104, 101, 108, 108,
//     111,  32, 119, 111,
//     114, 108, 100
//   ]
// }