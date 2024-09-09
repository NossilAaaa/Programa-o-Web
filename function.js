//antes da ES6

function ola(){
    console.log("criando uma function antes da ES6")
}

ola();

//criando uma function usando arrow functions
const ola2 = () => {
    console.log("Criando uma função com arrow functions")
}

ola2();

function somar(num1, num2){
    return num1 + num2;
}

console.log(somar(2,4));

const somar2 = (num1, num2) => {
    return num1 + num2;
}

console.log(somar2(7,8));