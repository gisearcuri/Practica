const conAFahrenheit = celsius => (celsius * 9 / 5) + 32;
console.log(conAFahrenheit(2));

const generadorMensajes = (nombre,edad) => `Hola ${nombre}, tienes ${edad} años de edad.`;
console.log(generadorMensajes("Gisela", 24));

const millasAkilometros = millas => `${millas * 1.60934} km` ; 
console.log(millasAkilometros(10))

const climaAdvisor = clima => clima=="lluvioso"? "llevar un paraguas" : "llevar un sombrero";
console.log(climaAdvisor("soleado"))
