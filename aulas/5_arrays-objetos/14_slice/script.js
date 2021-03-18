// slice nos permite remover uma parte especifica do array

let nums = [0,1,2,3,4,5,6,7,8,9];

console.log(nums.slice(4,5));
console.log(nums.slice(4,6));
console.log(nums.slice(5));
console.log(nums.slice(-3)); //se colocar número negativo considera de trás para frente.
console.log(nums.slice(3,-2)); //considera até o final, com a restrição negativa.
console.log(nums.slice(-1));