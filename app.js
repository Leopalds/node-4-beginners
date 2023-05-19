//Modulo sobre Path
const path = require('path'); //Caso não utilize o ./ ele vai utilizar um dos moduos padrões do node

var pathObj = path.parse(__filename);

console.log(pathObj);