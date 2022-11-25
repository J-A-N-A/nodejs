var fs = require('fs');

//async read 

fs.readFile('sample.txt',(err,data)=>{
  if(err) return console.log(err);
  console.log("async read" + data.toString());
})



//sync read 

fs.readFileSync('sample.txt',(err,data)=>{
  if(err) return console.log(err);
  console.log('sync read'+ data.toString());
})


console.log('Program ended')