const fs = require('fs');
const { stringify } = require('querystring');

let arquivo = 'nomes.txt';
const livros = [{nome : "CSS3", ano : 2020}, {nome : "HTML", ano : 2021}, {nome : "React", ano : 2024}];

fs.writeFileSync(arquivo,JSON.stringify(livros));

let dadosArquivo = fs.readFileSync(arquivo).toString('UTF8');

console.log(dadosArquivo);

//convertendo a leitura para um objeto java script
dadosArquivo = JSON.parse(dadosArquivo);

console.log(dadosArquivo);