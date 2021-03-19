// Crie um objeto que simula um endereço de um cliente
// Propriedades:
/*
    - Rua;
    - Bairro;
    - Cidade;
    - Estado
*/
// No constructor o endereço já deve ser definido por completo
// Crie métodos para atualizar todas as propriedades

class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set novaRua(novaRua){
        this.rua = novaRua;
    }

    set novoBairro(novoBairro){
        this.bairro = novoBairro;
    }

    set novaCidade(novaCidade){
        this.cidade = novaCidade;
    }

    set novoEstado(novoEstado){
        this.estado = novoEstado;
    }
}

let novoEndereco = new Endereco("Rua arapongas", "Sitio cercado", "Curitiba", "Paraná");
console.log(novoEndereco);

novoEndereco.novaRua = "Rua Brasil paraná de cristo";
console.log(novoEndereco);

novoEndereco.novoBairro = "Pinheirinho";
console.log(novoEndereco);