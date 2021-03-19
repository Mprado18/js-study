const cachorro = {
    raca: '', //propriedade vazia
    uivar: function(){
        console.log("auuuuuuuu");
    },
    rosnar: function(){
        console.log("grrr");
    },
    setRaca: function(raca){
        this.raca = raca; //função para incluir novo valor a propriedade
    },
    getRaca: function(){
        return "A raça é " + this.raca; //função para pegar o valor da propriedade
    }
}

console.log(cachorro.raca);
cachorro.setRaca('Pastor Alemão');
console.log(cachorro.raca);
console.log(cachorro.getRaca());

// Com o método set podemos incluir um novo valor a propriedade
// Com o método get podemos pegar aquele valor incluído