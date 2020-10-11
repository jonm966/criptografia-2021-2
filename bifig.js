const readline = require('readline');
const cifrar = require('./cifrado');
const descifrar = require('./descifrado');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

r1.on('line', () => controlador(line));

const algoritmo = {
  metodo: '',
  ejecutar: mensaje => metodo === 'ENCRYPT'? cifrar(mensaje): descifrar(mensaje)
};

const controlador = linea => {
  switch(linea){

    case 'ENCRYPT':
      algoritmo.metodo = 'ENCRYPT';
      break;

    case 'DECRYPT':
      ejecutar.metodo = 'DECRYPT';
      break;

    default:
      algoritmo.ejecutar(linea);
  }
};
