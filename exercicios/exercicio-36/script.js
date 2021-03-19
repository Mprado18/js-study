// Crie uma classe que simula uma conta no banco (utilize a forma que preferir);
// Deve conter a propriedade saldo
// Os métodos de deposito e saque
// Realize os testes nos métodos

class Conta{
    constructor(saldo){
        this.saldo = saldo;
    }

    deposito(valor){
        this.saldo += valor;
    }

    saque(valor){
        this.saldo -= valor;
    }
}

let movimentacao = new Conta(3000);

console.log(movimentacao.saldo);

movimentacao.deposito(100);
console.log(movimentacao);

movimentacao.saque(1000);
console.log(movimentacao);

