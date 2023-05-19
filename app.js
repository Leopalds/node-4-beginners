console.log() //From global variable

setTimeout(); //global.setTimeout();
clearTimeout();

setInterval()
clearInterval()

var message = 'Olá, Mundo!';
console.log(global.message); //undefined

/*  São funções que no JS chamamos sobre o objeto window
    Aqui no node chamamos pelo objeto global
    a única diferença é que aqui, uma variável declarada não poderá ser
    acessada pelo objeto global, pela modularização do Node.
*/