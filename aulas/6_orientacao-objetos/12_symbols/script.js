class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
    }

    latir(){
        console.log('Au Au');
    }
}

Cachorro.prototype.raca = 'SRD';

let patas = Symbol(); //essa propriedade se torna uma constante

Cachorro.prototype[patas] = 4;

let labrador = new Cachorro('Labrador', 'Dourado');

labrador.latir();

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);

//acessando symbol
console.log(Cachorro.prototype[patas]);

console.log(labrador[patas]);