class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.patas = patas; //valor default para patas
        this.cor = cor;
    }

    latir(){
        console.log('Au Au');
    }
}

Cachorro.prototype.raca = 'SRD'; //essa forma estamos definindo um valor default
Cachorro.prototype.patas = 4; //essa forma estamos definindo um valor a patas

let labrador = new Cachorro('Labrador', 'Dourado'); //estamos atribuindo um novo valor a propriedade
console.log(labrador.patas);

labrador.latir();

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);