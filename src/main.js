const carro = {
    id: 1,
    nombre : 'LaFerrari',
    marca: {
        id: 1,
        nombre: 'Ferrari',
        ubicacion : 'Europa',
        age: 100
    },
    inventarios : [
        {
            id: 1,
            color: 'Rojo',
            cantidad: 5,
            precio: 11000000
        },
        {
            id: 2,
            color: 'Blanco',
            cantidad: 2,
            precio: 10000000
        },
        {
            id: 3,
            color: 'Amarillo',
            cantidad: 4,
            precio: 11500000
        }
    ],
    totalInventario : function () {
    let total= 0;
    this.inventarios.forEach(inventario => {
        total= total + inventario.precio * inventario.cantidad;
    });
    return total;
    },
    fechaAlta: new Date(),
    costo : 10000000,
    saludo : function () {
        return `Hola ${this.marca.nombre} ${this.nombre}`
    }
}

if(carro.lugarProcedencia != undefined && carro.lugarProcedencia.name){
    console.log("cumple")
}
else{
    console.log("no cumple")
}

console.log(carro.lugarProcedencia);
console.log(carro.lugarProcedencia?.name);