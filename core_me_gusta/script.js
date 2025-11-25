let like1 = document.querySelector("#like1");
let like2 = document.querySelector("#like2");
let like3 = document.querySelector("#like3");

let cont1 = 0;
let cont2 = 0;
let cont3 = 0;

function contador1(){
    cont1++;
    like1.innerText = cont1 + "like(s)"
}
function contador2(){
    cont2++;
    like2.innerText = cont2 + "like(s)"
}
function contador3(){
    cont3++;
    like3.innerText = cont3 + "like(s)"
}

