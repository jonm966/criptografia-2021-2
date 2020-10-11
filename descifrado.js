// Autor: Jonas Montoya
// Fecha: 11/10/20
// Descripción: Métodos para descifrado

const tabla = require('./tablaCifrado');

const descifrar = mensaje => {

  let indicesCaracter;
  let indicesMensaje = '';
  
  for (let caracter of mensaje){
    indicesCaracter = tabla.obtenerIndices(caracter);
    indicesMensaje += indicesCaracter[0] + '' + indicesCaracter[1];
  }

  const indicesFila = indicesMensaje.slice(0, indicesMensaje.length/2);
  const indicesColumna = indicesMensaje.slice(indicesMensaje.length/2); 

  let mensajeDescifrado = '';
  for (let i = 0; i < indicesFila.length; i++)
    mensajeDescifrado += tabla.obtenerCaracter( indicesFila[i], indicesColumna[i] );

  console.log(mensajeDescifrado);
}

module.exports = descifrar;
