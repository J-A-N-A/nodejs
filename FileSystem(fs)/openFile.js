var fs =require('fs')

fs.open('sample.txt','r+',(err,fd)=>{
    if(err) return console.error(err);
    console.log('file opened successfully')
})
