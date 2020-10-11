const readline = require('readline');
const cifrar = require('./cifrado');
const descifrar = require('./descifrado');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

r1.on('line', line => controlador(line));

const algoritmo = {
  metodo: '',
  ejecutar: function(mensaje) { this.metodo === 'ENCRYPT'? cifrar(mensaje): console.log('Valor de metodo:', this.metodo) }
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
