
// Función sumArray: Suma de todos los elementos de un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - La suma de todos los elementos del array

const sumArray = (array) => {
    if (array.length === 0) {
      return 0;
    }
  
    const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
  
    return sum;
  };
  
  
  
  // Función filterEvenNumbers: Filtrar números pares de un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con solo los números pares del array original

  const filterEvenNumbers = (array) => {
    const evenNumbers = array.filter(num => num % 2 === 0);
    return evenNumbers; 
  };
  
  
  // Función findMaxNumber: Encontrar el mayor número en un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Number - El mayor número en el array
  const findMaxNumber = (array) => {
    if (array.length === 0) {
      return undefined;
    }
  
    const maxNumber = Math.max(...array);
  
    return maxNumber;
  };
  
  
  // Función toUpperCaseStrings: Convertir un array de strings a mayúsculas
  // Parámetros: array (Array) - Un array de strings
  // Devuelve: Array - Un nuevo array con todas las strings convertidas a mayúsculas
  const toUpperCaseStrings = (array) => {

    const upperCaseArray = array.map(str => str.toUpperCase());
    return upperCaseArray; 
  };
  

  
  // Función calculateAverage: Calcular el promedio de un array de números
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Number - El promedio de los números en el array
const calculateAverage = (array) => {
  
  if (array.length === 0) {
    return undefined;
  }

  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);

  const average = sum / array.length;

  return average; 
};


  // Función sortNumbersAscending: Ordenar un array de números de forma ascendente
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con los números ordenados de forma ascendente
 const sortNumbersAscending = (array) => {
 e
  const sortedArray = array.slice().sort((a, b) => a - b);
  return sortedArray;
};


  
  // Función findFirstElement: Encontrar el primer elemento que cumple una condición en un array
  // Parámetros: 
  // - array (Array) - Un array de elementos
  // - condition (Function) - Una función de condición que devuelve true o false
  // Devuelve: Any - El primer elemento que cumple con la condición, o undefined si ninguno lo hace
const encontrarPrimerElemento = (array, condicion) => {
  for (let elemento of array) {
    if (condicion(elemento)) {
      return elemento; 
    }
  }
  return undefined; 
};
  
  // Función countElements: Contar la cantidad de elementos en un array
  // Parámetros: array (Array) - Un array de elementos
  // Devuelve: Number - La cantidad de elementos en el array
 const contarElementos = (array) => {
  const cantidad = array.length;
  return cantidad; 
};
  
  // Función concatenateArrays: Concatenar dos arrays
  // Parámetros: 
  // - array1 (Array) - El primer array a concatenar
  // - array2 (Array) - El segundo array a concatenar
  // Devuelve: Array - Un nuevo array que es la concatenación de los dos arrays proporcionados
const concatenarArrays = (array1, array2) => {

  const arrayConcatenado = array1.concat(array2);
  return arrayConcatenado; 
};
  
  // Función squareNumbers: Calcular el cuadrado de cada número en un array
  // Parámetros: array (Array) - Un array de números
  // Devuelve: Array - Un nuevo array con los cuadrados de los números en el array original
 const squareNumbers = (array) => { 
  const arrayCuadrado = array.map(numero => numero ** 2);
  return arrayCuadrado; 
};

  // Función flecha para agregar habilidades a un jugador de un juego
const agregarHabilidad = (jugador, nuevaHabilidad) => {
  
    if (!jugador.habilidades) {
        jugador.habilidades = []; 
    }
    
    if (!jugador.habilidades.includes(nuevaHabilidad)) {
        jugador.habilidades.push(nuevaHabilidad);
    }
    
    return jugador;
};

// Función para calcular la duración total de reproducción de todas las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'duracion'.
// Retorna:
// - Un número que representa la duración total de todas las películas en minutos.
const calcularDuracionTotal = (peliculas) => {
 
    let duracionTotal = 0;
    
    for (let pelicula of peliculas) {
       
        duracionTotal += pelicula.duracion;
    }
    return duracionTotal; 
};


// Función para buscar películas por título y género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'genero'.
// - titulo: String que representa el título a buscar.
// - genero: String que representa el género a buscar.
// Retorna:
// - Un array de objetos que representan películas que coinciden con el título y el género especificados.
const buscarPeliculas = (peliculas, titulo, genero) => {
   
    const peliculasFiltradas = peliculas.filter(pelicula => pelicula.titulo.toLowerCase().includes(titulo.toLowerCase()) && pelicula.genero.toLowerCase() === genero.toLowerCase());
    
    return peliculasFiltradas; 
};

// Función para calcular el promedio de puntajes de las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'puntaje'.
// Retorna:
// - Un número que representa el promedio de puntajes de todas las películas.
const calcularPromedioPuntajes = (peliculas) => {
    if (peliculas.length === 0) {
        return 0; 
    }

    const sumaPuntajes = peliculas.reduce((acumulador, pelicula) => acumulador + pelicula.puntaje, 0);
    
    const promedio = sumaPuntajes / peliculas.length;
    
    return promedio;
};

// Función para filtrar películas por año de lanzamiento.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'año'.
// - año: Número que representa el año de lanzamiento a filtrar.
// Retorna:
// - Un array de objetos que representan películas lanzadas en el año especificado.
const filtrarPorAño = (peliculas, año) => {
    // Filtrar las películas por año de lanzamiento.
    
};

// Función para calcular el promedio de duración de las películas por género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'duracion' y 'genero'.
// - genero: String que representa el género de las películas a considerar.
// Retorna:
// - Un número que representa el promedio de duración de las películas del género especificado.
const filtrarPorAño = (peliculas, año) => {
  
    const peliculasFiltradas = peliculas.filter(pelicula => pelicula.año === año);
    
    return peliculasFiltradas; 
};


// Clase base que representa un vehículo
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

   obtenerInformacion() {
        return "Marca: " + this.marca + ", Modelo: " + this.modelo + ", Año: " + this.año;
    }
}



// Clase que representa un automóvil
class Automovil extends Vehiculo {
    constructor(marca, modelo, año, color, cilindrada, potencia, numPuertas, numAsientos, tipoTransmision) {
        super(marca, modelo, año);
        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.numPuertas = numPuertas;
        this.numAsientos = numAsientos;
        this.tipoTransmision = tipoTransmision;
    }

   obtenerInformacion() {
    return 'Marca: ' + this.marca + ', Modelo: ' + this.modelo + ', Año: ' + this.año + ', Color: ' + this.color + ', Cilindrada: ' + this.cilindrada + ', Potencia: ' + this.potencia + ', Número de Puertas: ' + this.numPuertas + ', Número de Asientos: ' + this.numAsientos + ', Tipo de Transmisión: ' + this.tipoTransmision;
}

}


// Clase que representa una motocicleta
class Motocicleta extends Vehiculo {
    constructor(marca, modelo, año, color, cilindrada, potencia, numRuedas, tipo) {
        super(marca, modelo, año);
        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.numRuedas = numRuedas;
        this.tipo = tipo;
    }

    obtenerInformacion() {
    return "Marca: " + this.marca + ", Modelo: " + this.modelo + ", Año: " + this.año + ", Color: " + this.color + ", Cilindrada: " + this.cilindrada + ", Potencia: " + this.potencia + ", Número de Ruedas: " + this.numRuedas + ", Tipo: " + this.tipo;
}

}


// Clase que representa un camión
class Camion extends Vehiculo {
    constructor(marca, modelo, año, color, cilindrada, potencia, numEjes, capacidadCarga, tipoCarroceria) {
        super(marca, modelo, año);
        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.numEjes = numEjes;
        this.capacidadCarga = capacidadCarga;
        this.tipoCarroceria = tipoCarroceria;
    }

  obtenerInformacion() {
    return "Marca: " + this.marca + ", Modelo: " + this.modelo + ", Año: " + this.año + ", Color: " + this.color + ", Cilindrada: " + this.cilindrada + ", Potencia: " + this.potencia + ", Número de Ejes: " + this.numEjes + ", Capacidad de Carga: " + this.capacidadCarga + " toneladas, Tipo de Carrocería: " + this.tipoCarroceria;
}
}


// Clase que representa un autobús
class Autobus extends Vehiculo {
    constructor(marca, modelo, año, color, cilindrada, potencia, capacidadPasajeros, tipoCombustible, tipoMotor) {
        super(marca, modelo, año);
        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.capacidadPasajeros = capacidadPasajeros;
        this.tipoCombustible = tipoCombustible;
        this.tipoMotor = tipoMotor;
    }

   obtenerInformacion() {
    return "Marca: " + this.marca + ", Modelo: " + this.modelo + ", Año: " + this.año + ", Color: " + this.color + ", Cilindrada: " + this.cilindrada + ", Potencia: " + this.potencia + ", Capacidad de Pasajeros: " + this.capacidadPasajeros + ", Tipo de Combustible: " + this.tipoCombustible + ", Tipo de Motor: " + this.tipoMotor;
    }
}


// Clase que representa una bicicleta
class Bicicleta extends Vehiculo {
    constructor(marca, modelo, año, tipo, numMarchas, material, suspencion, frenos, tipoManubrio) {
        super(marca, modelo, año);
        this.tipo = tipo;
        this.numMarchas = numMarchas;
        this.material = material;
        this.suspencion = suspencion;
        this.frenos = frenos;
        this.tipoManubrio = tipoManubrio;
    }

    obtenerInformacion() {
    return "Marca: " + this.marca + ", Modelo: " + this.modelo + ", Año: " + this.año + ", Tipo: " + this.tipo + ", Número de Marchas: " + this.numMarchas + ", Material: " + this.material + ", Suspensión: " + this.suspencion + ", Frenos: " + this.frenos + ", Tipo de Manubrio: " + this.tipoManubrio;
}

}


/**
 * Por favor no borrar el código que hasta de aqui en adelante.
 */

// Exportar las funciones para su uso en otros archivos.
 
  module.exports = { 
    sumArray, 
    filterEvenNumbers, 
    findMaxNumber, 
    toUpperCaseStrings, 
    calculateAverage, 
    sortNumbersAscending, 
    findFirstElement, 
    countElements, 
    concatenateArrays, 
    squareNumbers,
    agregarHabilidad,
    calcularDuracionTotal,
    buscarPeliculas,
    calcularPromedioPuntajes,
    filtrarPorAño,
    calcularPromedioDuracionPorGenero,
    Vehiculo, Automovil, Motocicleta, Camion, Autobus, Bicicleta
  };
  
