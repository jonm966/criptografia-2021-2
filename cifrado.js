// Autor: Jonas Montoya
// Fecha: 11/10/20
// Descripción: Métodos para cifrado

const tabla = require('./tablaCifrado');

const parseMensaje = mensaje => mensaje.replace(/ /g, '');

const cifrar = mensaje => {
  //Eliminamos cualquier espacio en blanco
  mensaje = parseMensaje(mensaje);
  const indicesColumna = [];
  const indicesFila = [];
  let indicesCaracter;

  for (let caracter of mensaje){
    indicesCaracter = tabla.obtenerIndices(caracter);
    //Agregamos el indice de la fila
    indicesFila.push( indicesCaracter.shift() );
    //Agregamos el indice de la columna
    indicesColumna.push( indicesCaracter.shift() );
  }

  const indicesCifrado = indicesFila.concat( indicesColumna );
  let mensajeCifrado = '';
  for (let i = 0; i < indicesCifrado.length; i += 2)
    mensajeCifrado += tabla.obtenerCaracter( indicesCifrado[i], indicesCifrado[i+1] ); //fila, columna

  console.log(mensajeCifrado);
}

module.exports = cifrar;
