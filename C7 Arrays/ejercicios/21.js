function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const mesesBuscados = ["Enero", "Marzo", "Noviembre"]; // Meses requeridos
  const encontrados = array.filter(mes => mesesBuscados.includes(mes)); // Filtramos los meses que están en el array

  return encontrados.length === 3 ? encontrados : "No se encontraron los meses pedidos"; // Verificamos si están todos
}

module.exports = mesesDelAño;
