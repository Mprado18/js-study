// Escreva uma função que receba dois números, o primeiro é a base e o segundo é a potência;
// Faça a operação matética de elevar a potência e retorne o resultado

function calcPotencia(base,exp){
    return Math.pow(base,exp);
    //return base ** exp, metódo alternativo de resolver potência
}

console.log(calcPotencia(10,2));
console.log(calcPotencia(1,1));
console.log(calcPotencia(2,2));
console.log(calcPotencia(4,10));
console.log(calcPotencia(8,16));
console.log(calcPotencia(3,2));