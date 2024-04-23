const promedio = 7.0;

let resultado = '';

//Operador ternario
resultado = (promedio >= 7.0) ? 'Aprobado' : 'Reprobado';

//equivalente
if(promedio >= 7.0){
    //resultado = 'Aprobado';
}
else{
    //resultado = 'Reprobado';
}

console.log(resultado)

let valorMaximo = 0;

const a = 4;
const b = 6;
const c = 10;

valorMaximo = a > b ? a : b;
valorMaximo = valorMaximo > c ? valorMaximo : c;

console.log(valorMaximo);
