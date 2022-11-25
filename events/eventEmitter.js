//learn about event listeners ,event emitters 
const events =require('events');

var eventEmitter = new events.EventEmitter();
//listener #1
var listener1 =function listener1(){
  console.log('listener 1 executed!');
}
//listener 2
var listener2 = function listener2(){
  console.log('listener 2 executed!');
}
//binding the connection  with listener 1 function
eventEmitter.addListener('connection',listener1);
//binding the connection with listener 2 function
eventEmitter.on('connection',listener2);
//below is to count the listeners on connection event
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners +  ' listeners are listening to connection event')
//Firing the connection event
eventEmitter.emit('connection');
//remove the binding of listener1 function

eventEmitter.removeListener('connection',listener1);
console.log('listener1 is stopped listening');

//again firing
eventEmitter.emit('connection');

eventListeners= events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "listeners are listening to connection event")

console.log('program ended');

