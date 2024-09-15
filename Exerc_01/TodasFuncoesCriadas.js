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

function adicionarObjeto(arquivo, novoObjeto) {
    let dadosArquivo = [];

    if (fs.existsSync(arquivo)) {
        let conteudoArquivo = fs.readFileSync(arquivo).toString('UTF8');
        
        if (conteudoArquivo.length > 0) {
            dadosArquivo = JSON.parse(conteudoArquivo);
        }
    }

    dadosArquivo.push(...novoObjeto);

    fs.writeFileSync(arquivo, JSON.stringify(dadosArquivo, null, 4));

    console.log(`Objeto(s) adicionado(s):`, dadosArquivo);
}

function lerDados(arquivo) {
    if (fs.existsSync(arquivo)) {
        fs.readFile(arquivo, 'UTF8', (err, contents) => {
            if (err) {
                console.error("Erro ao ler o arquivo:", err);
            } else {
                console.log("Conteúdo do arquivo:", contents);
            }
        });
    } else {
        console.log('Arquivo ' +arquivo+ ' não encontrado.');
    }
}

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

module.exports = {
    buscarObjetoPorNome,
    adicionarObjeto,
    lerDados,
    removerObjetoPorNome
};
