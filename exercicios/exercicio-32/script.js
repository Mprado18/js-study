// Crie um array com 5 itens;
// Crie uma iteração entre todos eles e imprima cada um no console.

let itens = [2,44,"Teste",222,"Teste2",2,10];

console.log('Usando o forEach');

itens.forEach(item =>{
    console.log("O resultado é " + item);
});

console.log('Usando o for');

for(let i = 0; i < itens.length; i++){
    console.log(`O resultado é ${itens[i]}`);
}