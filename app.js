//Modulo sobre sistema operacional
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//Template string 
//ES6 / ES2015 : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`); //Exemplo de template string
console.log(`Free Memory: ${freeMemory}`);