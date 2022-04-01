const inputNum = document.getElementById("numero");
const inputMin = document.getElementById("minimo");
const inputMax = document.getElementById("maximo");
const btnGerar = document.getElementById("gerar");
const inputColuna = document.getElementById("colunas");
const tabela = document.getElementById("tabela");

function gerar (){
    const num = parseInt(inputNum.value);
    const col = parseInt(inputColuna.value);
    const min = parseInt(inputMin.value);
    const max = parseInt(inputMax.value);

    if(isNaN(num) || isNaN(col) || isNaN(max) || isNaN(min)){
        alert("Algum dos campos está errado. Digite valores válidos");
    }else{
        tabela.innerHTML="";
        for(let i=1 ; i<=num; i++){
            tabela.innerHTML+= Math.trunc(Math.random() * (max - min + 1) + min) + "        ";
            if(i%col==0){
                tabela.innerHTML+= "\n";
            }
        }
    }

} btnGerar.onclick = gerar;