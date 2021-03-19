class Cachorro {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }

    latir(){
        console.log("Au au");
    }
}

Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 'Dourado');
console.log(labrador.patas);

