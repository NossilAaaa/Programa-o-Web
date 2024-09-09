const livros = [{nome : "CSS3", ano : 2020}, {nome : "HTML", ano : 2021}, {nome : "React", ano : 2024}];

/*
livros.map((livro) => {
    console.log("Nome: " + livro.nome + " Ano: " + livro.ano);
})*/

livros.map((livro, index) => {
    console.log("Nome: " + livro.nome + " Ano: " + livro.ano + " Indice: " + index);
})

let livrosFiltrados = livros.filter((livro) => livro.ano > 2019);
console.log(livrosFiltrados);

// find retorna somente um objeto
let objeto = livros.find((livro) => livro.nome == "React")
console.log(objeto);



