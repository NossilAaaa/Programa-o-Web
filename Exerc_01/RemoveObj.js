const fs = require('fs');

function removerObjetoPorNome(nome, arquivo) {
    if (fs.existsSync(arquivo)) {
        let LerArquivo = fs.readFileSync(arquivo).toString('UTF8');
        let objetos = JSON.parse(LerArquivo);
        
        const objetosAtualizados = objetos.filter(objeto => objeto.nome !== nome);
        
        fs.writeFileSync(arquivo, JSON.stringify(objetosAtualizados, null, 4));

        console.log('Objeto com o nome de ' + nome + ' removido.');
    } else {
        console.log('Arquivo '+arquivo+' não encontrado.');
    }
}

removerObjetoPorNome("Grafos", 'dados.txt');

