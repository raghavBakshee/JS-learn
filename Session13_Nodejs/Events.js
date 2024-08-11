import events from 'events';
const emitter = new events.EventEmitter();

const method1=()=> console.log("Event One");
const method2=()=> console.log("Event Two");
const method3=()=> console.log("Event Three");

//add methods to eventEmitter
emitter.on("myevent",method1);
emitter.on("myevent",method2);
emitter.on("myevent",method3);

//call all events
emitter.emit("myevent");

//remove method from eventemitter
emitter.removeListener('myevent', method2);
emitter.emit('myevent');