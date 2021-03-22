// querySelectorAll nos permite selecionas diversos elementos de uma vez apenas
// Isso nos possibilita alterações em massa

let itens = document.querySelectorAll('.itens-vermelhos');

console.log(itens);
console.log(itens[0].style.color);

itens[0].style.color = 'red';
itens[2].style.color = 'red';

let itens2 = document.querySelectorAll('.itens-azuis');

console.log(itens2);