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
const carroPorNombre= (nombreCliente) => {
    return carros.find(i => i.client.nombre === nombreCliente )
}

const carroPorId = (id) => {
    return carros.find(i => i.id == id )
}

const findCarById = (id) => {
    const promise= new Promise((resolve, reject) => {
        setTimeout(() => {
            const test = carroPorId(id);

            if( test ){

            resolve( test );

            }

            else{

                reject('No se encontró el carro con el id solicitado');
            }

        }, 3000);
    });
    return promise;
}

export{
    carros,
    carroPorNombre as default,
    carroPorId,
    findCarById
}

