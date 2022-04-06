const nome = document.getElementById ("nome");
const sobrenome = document.getElementById ("sobrenome");
const btn = document.getElementById ("botao");

function alertNome(){
    if(nome.value=="" || sobrenome.value==""){
       alert("Digite no campo");
    }else{
        alert("Olá, " + nome.value + " " + sobrenome.value);
    }
}

function apagarNome(){
    nome.value = "";
}
function apagarSobrenome(){
    sobrenome.value = "";
}

nome.onfocus = apagarNome;
sobrenome.onfocus = apagarSobrenome;
btn.onclick = alertNome;