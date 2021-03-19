// Crie uma classe de conta bancária;
// Propriedades:
/*
    - Saldo na conta corrente;
    - Saldo na conta poupança;
    - Juros da poupança;
*/
// Crie métodos de depósito e saque, também um método para trasnferir o dinheiro da poupanla para a corrente;
// Crie uma conta especial que herda da conta normal;
// Na conta especial os juros são dobrados sobre a conta normal

class Conta{
    constructor(saldoCC, saldoCP, juros){
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.juros = juros;
    }

    deposito(valor){
        this.saldoCC += valor;
    }

    saque(valor){
        this.saldoCC -= valor;
    }

    transferenciaCP(valor){
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }

    transferenciaCC(valor){
        this.saldoCP -= valor;
        this.saldoCC += valor;
    }

    jurosAniversario(){
        let juros = (this.saldoCP * this.juros) / 100;
        this.saldoCP += juros;
    }
}

class ContaEspecial extends Conta{
    constructor(saldoCC, saldoCP, juros){
        super(saldoCC, saldoCP, juros * 2);
    }
}

let conta = new Conta(3000, 1000, 2);

console.log(conta);

conta.deposito(100);
console.log(conta);

conta.saque(1000);
console.log(conta);

conta.transferenciaCP(2000);
console.log(conta);

conta.jurosAniversario();
console.log(conta);

let contaEspecial = new ContaEspecial(10000, 5000, 1);
console.log(contaEspecial);

contaEspecial.saque(2000);
console.log(contaEspecial);

contaEspecial.jurosAniversario();
console.log(contaEspecial);