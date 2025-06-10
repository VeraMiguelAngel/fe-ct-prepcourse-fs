function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
// Inicializamos el índice del número más grande como 0
  let indiceMayor = 0;

  // Recorremos el array a partir del segundo elemento
  for (let i = 1; i < array.length; i++) {
    // Si encontramos un número mayor que el actual mayor, actualizamos el índice
    if (array[i] > array[indiceMayor]) {
      indiceMayor = i;
    }
  }

  // Devolvemos el valor en ese índice
  return array[indiceMayor];
}
let array = [3,5,7,2,8,6];
encontrarIndiceMayor(array);
//module.exports = encontrarIndiceMayor;
