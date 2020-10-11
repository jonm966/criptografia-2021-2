// Autor: Jonas Montoya
// Fecha: 11/10/20
// Descripción: Métodos y tabla de cifrado

const tablaCifrado = [
  ['E', 'N', 'C', 'R', 'Y'],
  ['P', 'T', 'A', 'B', 'D'],
  ['F', 'G', 'H', 'I', 'K'],
  ['L', 'M', 'O', 'Q', 'S'],
  ['U', 'V', 'W', 'X', 'Z']
];

const obtenerIndices = caracter => {
  //Itera sobre las filas de la tabla
  for ( let [indiceFila, fila] of tablaCifrado.entries() ){
    if ( fila.includes(caracter) )
      return [ indiceFila, fila.indexOf(caracter) ];
  }
}

const obtenerCaracter = (fila, columna) => tablaCifrado[fila][columna];

module.exports = { tablaCifrado, obtenerIndices, obtenerCaracter };
