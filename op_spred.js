const livros1 = ['CSS3', 'NODE', 'React'];
console.log(livros1);
const livros2 = ['Java Script', 'HTML5'];
console.log(livros2);

//const livros = livros1 + livros2;
const livros = [...livros1,...livros2];

console.log(livros);

const precos = [500, 200, 300];

console.log(Math.max(...precos));

let objeto = {id : 1, nome : 'Alisson'};
console.log(objeto);
objeto.nome = "João";
console.log(objeto);
//alterando um objeto com o operador spread
let NewObject = {...objeto, 'nome' : "Lucas"};
console.log(NewObject);