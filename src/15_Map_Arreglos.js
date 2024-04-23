const carros = [
    {
        marca: 'Seat',
        modelo: 'Fr',
        anio: 2018, 
        nombre: 'Leon'
    },
    {
        marca: 'Seat',
        modelo: 'Excellence',
        anio: 2018, 
        nombre: 'Arona'
    },
    {
        marca: 'Cupra',
        modelo: 'Cupra',
        anio: 2018, 
        nombre: 'Ateca'
    },
    {
        marca: 'Cupra',
        modelo: 'Cupra',
        anio: 2018, 
        nombre: 'Formentor'
    },
    {
        marca: 'Cupra',
        modelo: 'Electrico',
        anio: 2018, 
        nombre: 'Moto'
    }
];

console.log(carros)

const marcasCarros = carros.map(i =>{
    return i.marca;
});

const nombresCarros = carros.map(i => {
    return i.nombre;
})

console.log(marcasCarros);
console.log(nombresCarros);