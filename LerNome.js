const fs = require('fs');

console.log(1);

/*
//funções de callback
function callback(err, contents){
    console.log(err, String(contents));
}*/

fs.readFile('./nomes.txt', (err, contents) => {
    console.log(err, String(contents))
});

const readFile = file => new Promise( (resolve, reject) => {
    fs.readFile(file, (err, contents) => {
        if(err){
            reject(err)
        }else{
            resolve(contents)
        }
    })
})

//chamando a primisse normalmente
readFile('./nomes.txt').then(contents => {
    console.log(String(contents))
})
.catch(err => console.log(err))

const leitura = async () => {
    const contents = await readFile('./nomes.txt');
    console.log(String(contents))
}

console.log(2);

console.log(3);

console.log(4);

console.log(5);