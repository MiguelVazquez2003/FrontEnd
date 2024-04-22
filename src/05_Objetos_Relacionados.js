const carro = {
    id: 1,
    nombre : 'LaFerrari',
    marca: {
        id: 1,
        nombre: 'Ferrari',
        ubicacion : 'Europa',
        age: 100
    },
    fechaAlta: new Date(),
    costo : 1000000,
    saludo : function () {
        return `Hola ${this.marca.nombre} ${this.nombre}`
    }
}

//carro.nombre = 'F40';
carro.costo = 2000000;

console.log(carro);
console.log(carro.saludo());