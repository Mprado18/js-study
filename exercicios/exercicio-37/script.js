// Crie uma classe que simula um carrinho de compras de um e-commerce;
// Propriedades:
/*
    - Itens;
    - Quantidade total;
    - Valor total
*/
// Defina os métodos para adicionar e remover itens do carrinho

class Carrinho{
    constructor(itens, qtd, valorTotal){
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }

    adiciona(item){

        let contador = 0;

        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id === item.id){
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if(contador === 0){
            this.itens.push(item);
        }
        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }

    remover(item){

        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id === item.id){
                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj){
                    return obj.id === item.id;
                })

                this.qtd -= this.itens[itemCarrinho].qtd;
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;

                this.itens.splice(index, 1);
            }
        }
    }
}

let carrinhoDeCompras = new Carrinho([
    {
        id: 01,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 02,
        nome: "Calça",
        qtd: 2,
        preco: 50
    }
], 3, 120);

console.log(carrinhoDeCompras);

carrinhoDeCompras.adiciona({id:01, nome:"Camisa", qtd:2, preco:20});
console.log(carrinhoDeCompras);

carrinhoDeCompras.adiciona({id:03, nome:"Boné", qtd:6, preco:15});
console.log(carrinhoDeCompras);

// carrinhoDeCompras.remover({id:03, nome:"Boné", qtd:4, preco:15});
// console.log(carrinhoDeCompras);

// CORRIGIR
//Possui um erro na função de remover, está removendo tudo e não apenas qtd informada
// CORRIGIR