function obtenerIniciales(nombreCompleto) {
  // Validación de entrada
  if (typeof nombreCompleto !== 'string' || nombreCompleto.trim() === '') {
    return "Entrada inválida";
  }

  return nombreCompleto
    .trim()
    .split(' ') // Divide por cada espacio simple
    .filter(palabra => palabra !== '') // Elimina los espacios extra para evitar errores
    .map(palabra => palabra[0].toUpperCase()) // Obtiene la primera letra en mayúscula
    .join('');
}

// PRUEBAS EN CONSOLA

// Prueba 1
console.log("Prueba 1:", obtenerIniciales("ana maria lópez")); 

// Prueba 2
console.log("Prueba 2:", obtenerIniciales("juan carlos pérez gómez"));

// Prueba 3
console.log("Prueba 3:", obtenerIniciales("   sofia   elena   rodriguez   "));

// Prueba 4: Entrada inválida
console.log("Prueba 4:", obtenerIniciales("   "));