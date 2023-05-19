
const fs = require('fs');

// fs.readdir Toda função nesse modulo tem a versão sincrona e a sincrona

//Na maioria dos casos é interessante utilizar a abordagem assincrona para lidar com multiplas requisições
//Porém, como estamos estudando e queremos um rápido resultado para somente uma execução, iremos usar a acordagem sync
// const files = fs.readdirSync('./');

// console.log(files);

//Usando o jeito sync temos que passar uma função como parametro para fazer algo, ao finalizar a execução da função
fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
});