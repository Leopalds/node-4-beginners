
const EventEmitter = require('events'); //Usando PascalCase, pois é uma classe
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', () => console.log('Listerner called'));

// Raise an event
emitter.emit('messageLogged');

