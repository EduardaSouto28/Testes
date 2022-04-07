const num1 = document.getElementById("num1");
const num2= document.getElementById("num2");
const btnGerar = document.getElementById("calcular");
const resultados = document.getElementById("resultados");

function calculos (){
    let soma = parseInt(num1.value) + parseInt(num2.value);
    let sub= num1.value - num2.value;
    let div= num1.value / num2.value;
    let mult= num1.value * num2.value;
    let pot= num1.value**num2.value;
    resultados.innerHTML="";

    resultados.innerHTML+= num1.value + "+"+ num2.value + " = " + soma + "\n";
    resultados.innerHTML+= num1.value + "-"+ num2.value + " = " + sub + "\n";
    resultados.innerHTML+= num1.value + "/"+ num2.value + " = " + div + "\n";
    resultados.innerHTML+= num1.value + "*"+ num2.value + " = " + mult + "\n";
    resultados.innerHTML+= num1.value + "^"+ num2.value + " = " + pot + "\n";
}

btnGerar.onclick = calculos;
