function test(input){
    input.innerText = "Adoptado";
    input.style.backgroundColor = "#274d16"
    input.style.color = "#ffffff"
}

let tipo = document.querySelector("#tipo");
let selec = document.querySelector("#selec");

selec.addEventListener("change" , function(){
    tipo.textContent = `Mostrando: ${selec.value}`;
});

