let pessoa = {
    nome: 'Marcos',
}

let pessoa2 = pessoa; //estamos dizendo que a pessoa2 é igual a pessoa

let pessoa3 = {
    nome: 'Marcos',
}

console.log(pessoa == pessoa2);
console.log(pessoa == pessoa3);
console.log(pessoa2 == pessoa3);

pessoa2.nome = 'Paulo',
console.log(pessoa.nome); /*como a pessoa2 e pessoa são iguais, se criamos uma nova propriedade ou alteramos em um objeto, afeta o outro*/

pessoa.nome = 'Marcos',
console.log(pessoa2.nome); /*como a pessoa2 e pessoa são iguais, se criamos uma nova propriedade ou alteramos em um objeto, afeta o outro*/