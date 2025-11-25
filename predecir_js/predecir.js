const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};

const { personal: { detalles: { edad, salario } } } = info;
console.log(edad);
console.log(salario);
//desestructura y muestra en la consola la edad
//agrega salario pero vacio

const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };
const resultado = { ...objetoA, ...objetoB };
console.log(resultado);
//le agrega a resultado objetoa y objetob

const verificar = () => {
    if (true) {
        const a = 2;
        let b = 3;
        var c = 4;
    }
    console.log(c);
    console.log(a);
    console.log(b);
}
verificar();
//se crean variables que solo funcionan dentro del if pero solo 1 funciona por fuera (var)  

const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
datos.edad = 30;
console.log(datos.edad);
//freeze vuelve ineditable nombre y edad

const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original);
console.log(nuevo);
//crea nueva variable usando los datos de original y le agrega 4

const frutas = ['manzana', 'naranja', 'pera', 'mango'];
const [primera, segunda] = frutas;
console.log(primera);
console.log(segunda);
//muestra en consola el primer y segundo valor de frutas

for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 2; i++) {
        console.log(i);
    }
}//  repite 3 veces 01

const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2];
console.log(combinados);
//declara una variable(combinados) que copia otras 2 variables usando operador spread... (numeros1 y numeros2)

const demostracion = () => {
    var nombre = 'Ana';
    let edad = 25;
    if (true) {
        var nombre = 'Luis';
        let edad = 30;
    }
    console.log(nombre);
    console.log(edad);
}
demostracion();
//queda de nombre Luis ya que es el ultimo var declarado y edad 25 porque let solo funciona dentro del if