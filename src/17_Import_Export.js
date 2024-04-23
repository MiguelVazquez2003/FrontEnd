import {carros, carroPorNombre} from './data/carros.js';

console.log(carros)

const marcasCarros = carros.map(i =>{
    return i.marca;
});

const nombresCarros = carros.map(i => {
    return i.client.nombre;
})

console.log(marcasCarros);
console.log(nombresCarros);

//const carroPorNombre = carros.find(i => i.nombre === 'Formentor' )
console.log('Carro por nombre : ');
console.log(carroPorNombre());

const carroFilter = carros.filter(i => i.id !== 1 )

console.log(carroFilter);

const carroSome = carros.some( i => i.client.nombre === 'Miguel' )
console.log(carroSome);