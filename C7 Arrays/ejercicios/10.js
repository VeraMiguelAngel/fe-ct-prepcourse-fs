function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      return array[i]; // Retorna el primer string con más de 5 caracteres
    }
  }
  return undefined; // Si no hay strings largos, retorna undefined
}

module.exports = obtenerPrimerStringLargo;
