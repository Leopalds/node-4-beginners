
const EventEmitter = require('events'); //Usando PascalCase, pois é uma classe
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged', (arg) => console.log('Listerner called', arg) );
emitter.on('logging', (e) => console.log(e.message));

// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http:://'});

//Raise: logging (data: message)
emitter.emit('logging', {message: 'Olá, Mundo!'});