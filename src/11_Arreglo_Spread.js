const carros = ['Ferrari', 'Nissan GTR', 'Porsche',
'Mc Laren', 'Mercedes GLC'];

carros.push('Mustang GT500', 'Challenger', 'Camaro');

const motos = ['Italika', 'Choper' , 'Ninja' , 'SuperSport'];

const tienda = [...carros, ...motos, 'rin18'];

const tienda2 = motos.concat(carros).concat('rin18');
console.log(carros);
console.log(tienda);
console.log(tienda2);