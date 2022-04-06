const nome = document.getElementById ("nome");
const sobrenome = document.getElementById ("sobrenome");
const btn = document.getElementById ("botao");

function alertNome(){
    if(nome.value=="" || sobrenome.value==""){
       alert("Digite no campo");
    }else{
        alert("olá " + nome.value + " " + sobrenome.value);
    }
}

btn.onclick = alertNome;