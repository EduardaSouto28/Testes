const nome = document.getElementById ("nome");
const btn = document.getElementById ("botao");

function alertNome(){
    if(nome.value==""){
       alert("Digite um nome no campo");
    }else{
        alert("Olá, " + nome.value);
    }
}

btn.onclick = alertNome;