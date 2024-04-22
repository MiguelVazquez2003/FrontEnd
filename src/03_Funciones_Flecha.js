
// Función de flecha obtenerInfo
// Devuelve una cadena que es la concatenación de name y apellido.
const obtenerInfo = (name = 'Miguel', apellido='Vazquez') =>
`${name} ${apellido}`;


const info = obtenerInfo('Angel', 'Diaz');

console.log(info);

// Función de flecha sum
// Esta función toma dos argumentos: a y b, ambos con valores predeterminados.
// Devuelve la suma de a y b.
const sum = (a=0, b=0) => a + b;


console.log(sum(5, 5));