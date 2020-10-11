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

const encriptar = mensaje => {

  const indicesColumna = [];
  const indicesFila = [];
  let indicesCaracter;

  [ ...mensaje ].forEach( caracter => {
    indicesCaracter = obtenerIndices(caracter);
    //Agregamos el indice de la fila
    indicesFila.push( indicesCaracter.shift() );
    //Agregamos el indice de la columna
    indicesColumna.push( indicesCaracter.shift() );
  });

  const indicesCifrado = indicesFila.concat( indicesColumna );
  let mensajeCifrado = '';
  for (let i = 0; i < indicesCifrado.length; i += 2)
    mensajeCifrado += cifrar( indicesCifrado[i], indicesCifrado[i+1] ); //fila, columna

  console.log(mensajeCifrado);
}

module.exports = encriptar;
