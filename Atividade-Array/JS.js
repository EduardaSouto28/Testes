const numero = document.getElementById("inputNum");
const btnInserir = document.getElementById("btnInserir");
const btnInserirFim = document.getElementById("btnInserirFim");
const btnLimpar = document.getElementById("btnLimpar");
const Lista = document.getElementById("Lista");
let Elementos=[];

function InserirFinal () {
    if(numero.value == ""){
        alert("Digite um valor válido!");
    }else{
        Elementos.push(numero.value);
        Lista.innerHTML= "";
        for (let i = 0; i<Elementos.length; ++i) {
            Lista.innerHTML += `<li>${Elementos[i]}</li>`;
        }
    }
    inputNum.value = "";
    inputNum.focus();
}
btnInserir.onclick = InserirFinal;


function InserirInicio (){
    if(numero.value == ""){
        alert("Digite um valor válido!");
    }else{
        Elementos.unshift(numero.value);
        Lista.innerHTML= "";
        for (let i = 0; i<Elementos.length; ++i) {
            Lista.innerHTML += `<li>${Elementos[i]}</li>`;
        }
    }
    inputNum.value = "";
    inputNum.focus();
}
btnInserirFim.onclick = InserirInicio;


function Limpar(){
    Elementos.splice(0,Elementos.length);
    Lista.innerHTML= "";
    for (let i = 0; i<Elementos.length; ++i) {
        Lista.innerHTML += `<li>${Elementos[i]}</li>`;
    }
    inputNum.value = "";
    inputNum.focus();
}
btnLimpar.onclick = Limpar;


const indice = document.getElementById("inputRemover");
const btnRemover = document.getElementById("btnRemover");

function RemoverLista () {
    if (Elementos.length <= indice.value){
        alert("Este índice não existe, digite outro");
    } else{
        Elementos.splice(indice.value,1);
        Lista.innerHTML= "";
        for (let i = 0; i<Elementos.length; ++i) {
            Lista.innerHTML += `<li>${Elementos[i]}</li>`;
        }
    }
    inputRemover.value="";
    inputRemover.focus();
}
btnRemover.onclick = RemoverLista;

