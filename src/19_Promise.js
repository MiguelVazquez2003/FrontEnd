import { carroPorId } from "./data/carros.js";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const test = carroPorId(2);
        console.log(test);
    }, 3000);
});