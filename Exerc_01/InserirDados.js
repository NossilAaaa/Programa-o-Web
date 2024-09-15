const fs = require('fs');

let arquivo = 'dados.txt';

const novo = [{"nome": "Grafos 2", "ano": 2024}];

let dadosArquivo = [];
if (fs.existsSync(arquivo)) {
    let mostraA = fs.readFileSync(arquivo).toString('UTF8');
    if (mostraA.length > 0) {
        dadosArquivo = JSON.parse(mostraA);
    }
}

dadosArquivo.push(...novo);
fs.writeFileSync(arquivo, JSON.stringify(dadosArquivo));

console.log(dadosArquivo);
