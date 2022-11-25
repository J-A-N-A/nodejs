var events =require('events');

var eventEmitter = new events.EventEmitter();

var connectionhandler = function connected(){
    console.log('connected successfully');

    eventEmitter.emit('data_recieved');
}
eventEmitter.on('connection',connectionhandler);
eventEmitter.on('data_recieved',()=>{
  console.log('data recived success');
})

//Firing the event

eventEmitter.emit('connection');
console.log('program ended');