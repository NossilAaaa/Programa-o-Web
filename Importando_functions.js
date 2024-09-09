const funcoes = require('./Exportando_functions');

funcoes.ola();

funcoes.saida("Importei função");

//usando desestruturação

const { ola, saida } = require('./Exportando_functions');

ola();
saida('Importei usando desestruturação');

