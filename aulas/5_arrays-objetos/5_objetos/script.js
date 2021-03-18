let cachorro = {
    nome: 'Winky',
    idade: 9,
    cor: 'Caramelo',
    latir: function(){
        console.log('Au au');
    },
    palavraEspecial: 'Papazinho',
};

console.log(cachorro.nome);
console.log(cachorro.idade);
console.log(cachorro.cor);
cachorro.latir();
console.log(cachorro.palavraEspecial);

// quando for declarar array usar []
// quando for declarar objetos usar {}