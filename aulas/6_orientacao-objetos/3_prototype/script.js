const pessoa = {
    maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
console.log(pessoa.hasOwnProperty('maos'));

// Prototype são todas as propriedades nativas do Object