let pessoa = {
    nome: 'Marcos',
    idade: 24,
    profissao: 'Analista de projetos',
}

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);

delete pessoa.profissao; //deletemos a propriedade profissão

console.log(pessoa.profissao);

pessoa.futuraProfissao = 'Desenvolvedor';  //incluimos uma nova propriedade ao objeto

console.log(pessoa.futuraProfissao);

console.log(pessoa);