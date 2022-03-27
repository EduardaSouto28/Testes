alert("Bem vindo ao site")

const inputIdade = document.getElementById ("idade");
const btnCalcular = document.getElementById ("calcular");
const inputResultado = document.getElementById ("resultado");

function calculo() {
    if(inputIdade.value == ""){
        alert("Digite um valor válido")
    }else{
        inputResultado.value= 2022-idade.value ;
        inputIdade.value = "";
        inputIdade.focus();
    }
}
btnCalcular.onclick = calculo;