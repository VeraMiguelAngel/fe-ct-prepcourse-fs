function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   var indeceAleatorio = Math.floor(Math.random() * array.length);
   return array[indeceAleatorio];
}

module.exports = obtenerElementoAleatorio;
