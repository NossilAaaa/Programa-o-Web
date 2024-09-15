const { buscarObjetoPorNome, adicionarObjeto, lerDados, removerObjetoPorNome } = require('./TodasFuncoesCriadas.js');

const arquivo = 'dados.txt';

// 1. Ler os dados do arquivo
lerDados(arquivo);

// 2. Adicionar um novo objeto
const novoObjeto = [{ nome: "NodeJS", ano: 2023 }];
adicionarObjeto(arquivo, novoObjeto);

// 3. Buscar um objeto por nome
const nomeBuscado = "Grafos 2";
const resultado = buscarObjetoPorNome(nomeBuscado, arquivo);
console.log(`Resultado da busca:`, resultado);

// 4. Remover um objeto pelo nome
const nomeParaRemover = "Grafos 2";
removerObjetoPorNome(nomeParaRemover, arquivo);

// 5. Ler os dados do arquivo again
lerDados(arquivo);