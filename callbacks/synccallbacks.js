var fs=require('fs');


var data =fs.readFileSync('sample.txt');


console.log(data.toString());

//below will execute at last as the above function blocks 
console.log('program ended');

