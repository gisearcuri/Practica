
    const avengers = [
        { nombre: "Spider-Man", edad: 17 },
        { nombre: "Iron Man", edad: 40 },
        { nombre: "Black Widow", edad: 28 },
        { nombre: "Shuri", edad: 16 },
];
    const mayoresDeEdad = (arr) => {
        let resultado = []; 
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].edad >= 18) {
            resultado.push(arr[i]);
            }
        }
        return resultado;
    };
console.log(mayoresDeEdad(avengers));


const armas = ['Espada de Athena', 'Escudo', 'Lazo de la Verdad', 'Brazaletes indestructibles'];
const [ primerArma ] = armas;
console.log(primerArma);