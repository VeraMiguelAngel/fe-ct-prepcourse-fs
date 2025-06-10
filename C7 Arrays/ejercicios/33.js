function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let result = "";
  let strings = [str1, str2, str3].filter(s => s.length > 0); // Filtra los strings no vacíos
  let maxLength = Math.max(...strings.map(s => s.length)); // Encuentra el tamaño del string más largo

  for (let i = 0; i < maxLength; i++) {
    for (let str of strings) {
      if (i < str.length) {
        result += str[i]; // Agrega el carácter si existe en el string actual
      }
    }
  }

  return result;
}

module.exports = combine;