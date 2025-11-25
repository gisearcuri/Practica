document.getElementById("colorButton").addEventListener("click", function() {
    cambiarColor();
    //Acá llamamos a la función cambiarColor
});

// Acá tenemos las instrucciones para el cambio de color 
function cambiarColor() {
    var colores = ["#FF6347", "#66CDAA", "#9370DB", "#FFD700", "#4682B4", "#FFA07A"];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
}
// Obtenemos el botón por su id
var botonCambiar = document.getElementById("botonCambiar");

// Agregamos un evento 'click' al botón
botonCambiar.addEventListener("click", function() {
    // Cambiamos el contenido del botón utilizando this y innerText
    this.innerText = "¡Texto cambiado!";
});
const boton = document.getElementById('miBoton');

boton.addEventListener('mouseover', function() {
console.log('El ratón está sobre el botón');
});

boton.addEventListener('mouseout', function() {
console.log('El ratón ha salido del botón');
});