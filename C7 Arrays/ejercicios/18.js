function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  return resultadosTest.length ? resultadosTest.reduce((suma, num) => suma + num, 0) / resultadosTest.length : 0;
}

module.exports = promedioResultadosTest;
