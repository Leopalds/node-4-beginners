const EventEmitter = require('events');

/*
    Aqui importamos e depois instaciamos um objeto da classe Logger
    Logger é uma classe que pode emitir eventos
*/
const Logger = require('./logger');
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => console.log('Listerner called', arg) );

logger.log('message');