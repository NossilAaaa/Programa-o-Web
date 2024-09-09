// let resultado = (condicao) ? retorno se verdadeiro : retorno se falso

let resultado = " ";
let preco = 50;

if(preco < 40){
    resultado = "barato";
}else{
    resultado = "caro";
}

console.log(resultado);

resultado = preco < 40 ? "barato" : "caro";
console.log(resultado);