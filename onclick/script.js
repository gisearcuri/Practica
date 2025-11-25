function test(input){
    input.innerText = "Cerrar sesion"
}
document.querySelector(".btn3").addEventListener("click", function(){
    this.style.display = "none";
});

let conta1 = 0;

function contador(input){
    conta1++;
    input.innerText = conta1 + " me gusta";
}

let conta2 = 0;

function contador1(input){
    conta2++;
    input.innerText = conta2 + " me gusta";
}