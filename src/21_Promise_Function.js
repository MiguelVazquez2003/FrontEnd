import {findCarById} from "./data/carros.js";


findCarById(3).then((json) => {
    console.log(json);
    console.log('Realizado con éxito');
}).catch((error) => {
    console.error(error);
});