// Author: Jonas Montoya
// Date: 11/10/20
// Description: Bifid Cipher

const tablaCifrado = require('./tablaCifrado');

const cifrar = (fila, columna) => tablaCifrado[fila][columna];

const obtenerIndices = caracter => {
  //Itera sobre las filas de la tabla
  for ( let [indiceFila, fila] of tablaCifrado.entries() ){
    if ( fila.includes(caracter) )
      return [ indiceFila, fila.indexOf(caracter) ];
  }
}

const descifrar = mensaje => {
  console.log(mensaje);
}

module.exports = descifrar;
