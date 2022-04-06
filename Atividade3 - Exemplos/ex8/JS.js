const valor = document.getElementById("valor");
const btnCalcular = document.getElementById("calcular");
const notas = document.getElementById("notas");

let duzentos= 200;
let cem= 100;
let cinquenta=50;
let vinte= 20;
let dez= 10;
let cinco= 5;
let dois= 2;
let um= 1;
let cinquentaC= 0.50;
let vinteC= 0.25;
let dezC= 0.10;
let cincoC= 0.05;
let umC= 0.01;

function calcular(){
    let real = parseFloat(valor.value);
    let resultado;
    notas.innerHTML="";

    if(real>=duzentos){
       resultado= parseInt(real/duzentos);
       notas.innerHTML+= resultado + " notas de R$200" + "\n";
       real-=resultado*duzentos;
    }

    if(real>=cem){
       resultado= parseInt(real/cem);
       notas.innerHTML+= resultado + " notas de R$100" + "\n";
       real-=resultado*cem;
    }

    if(real>=cinquenta){
        resultado= parseInt(real/cinquenta);
        notas.innerHTML+= resultado + " notas de R$50"+ "\n";
        real-=resultado*cinquenta;
    }
    
    if(real>=vinte){
        resultado= parseInt(real/vinte);
        notas.innerHTML+= resultado + " notas de R$20"+ "\n";
        real-=resultado*vinte;
    }

    if(real>=dez){
        resultado= parseInt(real/dez);
        notas.innerHTML+= resultado + " notas de R$10"+ "\n";
        real-=resultado*dez;
    }

    if(real>=cinco){
        resultado= parseInt(real/cinco);
        notas.innerHTML+= resultado + " notas de R$5"+ "\n";
        real-=resultado*cinco;
    }

    if(real>=dois){
        resultado= parseInt(real/dois);
        notas.innerHTML+= resultado + " notas de R$2"+ "\n";
        real-=resultado*dois;
    }

    if(real>=um){
        resultado= parseInt(real/um);
        notas.innerHTML+= resultado + " notas de R$1"+ "\n";
        real-=resultado*um;
    }

    if(real>=cinquentaC){
        resultado= parseInt(real/cinquentaC);
        notas.innerHTML+= resultado + " moedas de R$0.50"+ "\n";
        real-=resultado*cinquentaC;
    }

    if(real>=vinteC){
        resultado= parseInt(real/vinteC);
        notas.innerHTML+= resultado + " moedas de R$0.25"+ "\n";
        real-=resultado*vinteC;
    }

    if(real>=dezC){
        resultado= parseInt(real/dezC);
        notas.innerHTML+= resultado + " moedas de R$0.10"+ "\n";
        real-=resultado*dezC;
    }

    if(real>=cincoC){
        resultado= parseInt(real/cincoC);
        notas.innerHTML+= resultado + " moedas de R$0.5"+ "\n";
        real-=resultado*cincoC;
    }

    if(real>=umC){
        resultado= parseInt(real/umC);
        notas.innerHTML+= resultado + " moedas de R$0.1"+ "\n";
        real-=resultado*umC;
    }


}
btnCalcular.onclick=calcular;