// const logger = require('./logger'); 
/* 
    Usamos a função require para importar um arquivo, o retorno dela será justamente o atributo
    exports do objeto module.

    OBS: É IMPORTANTE que você utilize o retorno como uma constante para que não aconteça, acidentalmente,
    de alterar o valor dessa variável.
*/

// logger.log('mensagem'); 
/* 
    Como importamos somente uma função, podemos trocar o retorno para em vez de retornar um obejto com todos os imports
    Iremos importar somente a função 
*/
const log = require('./logger');

log('mensagem');