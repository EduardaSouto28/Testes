
const inputAlimento= document.querySelector("input");
const btnAdicionar= document.querySelector("button");
const lista= document.querySelector("ul");

function adicionar () {

    if(inputAlimento.value == "" || inputAlimento.value == lista.value ){
        alert("Digite um alimento válido");
    }else{
        lista.innerHTML += `<li>${inputAlimento.value}</li>`;
        console.log(lista);
        inputAlimento.value = "";
    }
}
btnAdicionar.onclick = adicionar;
