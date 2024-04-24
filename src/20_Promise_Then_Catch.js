import { carroPorId } from "./data/carros.js";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const test = carroPorId(11);

        if( test ){

        resolve( test );

        }

        else{

            reject('No se encontró el carro con el id solicitado');
        }

    }, 3000);
});

promise.then((json) => {
    console.log(json);
    console.log('Realizado con éxito');
}).catch((error) => {
    console.error(error);
});