function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
if (array.length === 0) return 0; // Caso especial: array vacío retorna 0
  let indiceMayor = 0;

  array.forEach((elemento, indice) => {
    if (elemento > array[indiceMayor]) {
      indiceMayor = indice;
    }
  });

  return indiceMayor;
}

module.exports = encontrarIndiceMayor;
