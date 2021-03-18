// Crie um objeto calculadora
// Este objeto deve ter os métodos:
/*  
    - somar;
    - subtrair;
    - multiplicar;
    - dividir
*/
// Cada método deve aceitar apenas dois parâmetros;
// Imprima um cálculo com cada um dos métodos no console

const calculadora = {
    somar: function(a,b){
        return a + b;
    },
    subtrair: function(a,b){
        return a - b;
    },
    multiplicar: function(a,b){
        return a * b;
    },
    dividir: function(a,b){
        return a / b;
    }
}

console.log(calculadora.somar(100,1));
console.log(calculadora.subtrair(10,5));
console.log(calculadora.multiplicar(5,5));
console.log(calculadora.dividir(1000,2));

