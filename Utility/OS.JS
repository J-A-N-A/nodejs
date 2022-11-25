var os =require('os');

console.log('free memory ' + os.freemem() + ' bytes')

console.log('os is ' + os.platform())

console.log('osRelease ' + os.release())

console.log('hostname '+os.hostname() )

console.log('ostype '+ os.type())

console.log('cpus '+ os.cpus())
