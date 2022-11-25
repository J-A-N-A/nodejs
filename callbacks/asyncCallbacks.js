var fs =require('fs');

var data = fs.readFile('sample.txt',(err,data)=>{
if(err) return console.error(err);

console.log(data.toString());

});


//the below code will execute first
console.log('program ended');