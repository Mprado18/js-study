let obj = {
    rodas: 4,
    portas: 4,
    tetoSolar: true,
    motor: "2.0"
}

const {rodas: vRodas, portas: vPortas, tetoSolar: vTetoSolar, motor: vMotor} = obj;

console.log(vRodas);
console.log(vPortas);
console.log(vTetoSolar);
console.log(vMotor);

// Essa forma nos permite criar variáveis com as propriedades de um objeto de forma individual
/* Isso possibilita não precisarmos chamar o objeto.propriedade, apenas chamamos a variável a qual foi atribuida a propriedade daquele objeto */