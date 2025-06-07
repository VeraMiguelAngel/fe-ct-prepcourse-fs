function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  var resultado = null;
  array.forEach(element => {if(typeof element === 'string' && element.length > 5 && resultado === null) {
  resultado = element;
  }
    
  });
  return resultado;

}

module.exports = obtenerPrimerStringLargo;
