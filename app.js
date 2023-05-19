// ( function (exports, require, module, __filename, __dirname){ Como o node "chama" cada modulo
    console.log(__filename); //Outros 2 argumentos que o node passa por padrão para todo modulo
    console.log(__dirname);
    const log = require('./logger');
    
    log('mensagem ');
// })