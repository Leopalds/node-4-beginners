var url = 'http://mylogger.io/log';

function log(message){
    //Send a HTTp request
    console.log(message);
}

module.exports = log; // Aqui exportamos a função log para o objeto module, assim poderemos acessá-lo em outros arquivos