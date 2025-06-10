function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let almacenados = []; // Array para guardar los números vistos

  for (let i = 0; i < numeros.length; i++) {
    if (almacenados.includes(numeros[i])) { // Si el número ya está en el array, es repetido
      return numeros[i]; // Retorna el primer número repetido encontrado
    }
    almacenados.push(numeros[i]); // Almacena el número en el array auxiliar
  }

  return undefined; // Si no hay números repetidos, retorna undefined
}

module.exports = encontrarElementoRepetido;