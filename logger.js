const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

/*
    Classe que extende um EventEmitter, para que utilizar o memos emissor de eventos
*/
class Logger extends EventEmitter {
    log(message){
        //Send a HTTp request
        console.log(message);
    
        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'http:://'});
    }
}

module.exports = Logger;