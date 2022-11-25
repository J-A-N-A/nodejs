var fs = require('fs');

var data = "hello world"


//below creates file output.txt and writes to it
var writeStream = fs.WriteStream('output.txt');


//write the data to the file using UTF8 format
writeStream.write(data,'UTF8')

//mark the end of the file
writeStream.end()

//handle stream events-->finish , and error

writeStream.on('finish',()=>{
  console.log('done writing')
})


writeStream.on('error',(err)=>{
  console.log(err.stack)
})


console.log('program end')