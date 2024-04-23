const carros = [
    {
        id: 1,
        marca: 'Seat',
        modelo: 'Fr',
        anio: 2018, 
        nombre: 'Leon',
        client: {
            nombre: 'Miguel',
            apellido: 'Vazquez'
        }
    },
    {
        id: 2,
        marca: 'Seat',
        modelo: 'Excellence',
        anio: 2018, 
        nombre: 'Arona',
        client: {
            nombre: 'Juan',
            apellido: 'Vazquez'
        }
    },
    {
        id: 3,
        marca: 'Cupra',
        modelo: 'Cupra',
        anio: 2018, 
        nombre: 'Ateca',
        client: {
            nombre: 'Pedro',
            apellido: 'Vazquez'
        }
    },
    {
        id: 4,
        marca: 'Cupra',
        modelo: 'Cupra',
        anio: 2018,
        nombre: 'Formentor',
        client: {
            nombre: 'Pablo',
            apellido: 'Vazquez'
        }
    },
    {
        id: 5,
        marca: 'Cupra',
        modelo: 'Electrico',
        anio: 2018,
        nombre: 'Moto',
        client: {
            nombre: 'Pablo',
            apellido: 'Diaz'
        }
    }
];

console.log(carros)

const marcasCarros = carros.map(i =>{
    return i.marca;
});

const nombresCarros = carros.map(i => {
    return i.client.nombre;
})

console.log(marcasCarros);
console.log(nombresCarros);

const carroPorNombre = carros.find(i => i.nombre === 'Formentor' )

console.log(carroPorNombre);

const carroFilter = carros.filter(i => i.id !== 1 )

console.log(carroFilter);

const carroSome = carros.some( i => i.client.nombre === 'Miguel' )
console.log(carroSome);