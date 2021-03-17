// Escreva uma função que retorne um número aleatório;
// O número máximo retornado deve ser passado via parâmetro;
// DICA: Math.random()

function aleatorio(num){
        return Math.floor(Math.random() * num) + 1;
}

console.log(aleatorio(10));
console.log(aleatorio(5));
console.log(aleatorio(100));
console.log(aleatorio(100));
console.log(aleatorio(24));
