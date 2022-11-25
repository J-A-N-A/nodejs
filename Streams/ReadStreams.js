var fs = require('fs')
var data =''

var readerStream = fs.createReadStream('sample.txt');

//set the encoding to utf8

readerStream.setEncoding('UTF8');

//handle stream events--> data , end , and error

readerStream.on('data',(chunk)=>{
  data+=chunk;
  
})
readerStream.on('end',()=>{
  console.log(data)
})

readerStream.on('error',(err)=>{
  console.log(err.stack)
})

console.log('Program ended')


