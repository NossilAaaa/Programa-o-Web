const fs = require('fs');

function buscarObjetoPorNome(nome, arquivo) {
    if (fs.existsSync(arquivo)) {
        let LerArquivo = fs.readFileSync(arquivo).toString('UTF8');
        let objetos = JSON.parse(LerArquivo);
        
        const objetoEncontrado = objetos.find(objeto => objeto.nome === nome);
        
        return objetoEncontrado || null;
    } else {
        console.log('Arquivo ' + arquivo + ' não encontrado.');
        return null;
    }
}

const resultado = buscarObjetoPorNome("CSS3", 'dados.txt');
console.log(resultado); 
