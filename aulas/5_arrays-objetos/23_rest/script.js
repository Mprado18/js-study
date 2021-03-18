let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 4;

function imprimirNumero(...nums){
    for(let i = 0; i < nums.length; i++){
        console.log(nums[i]);
    }
}

imprimirNumero(num,num1,num2);
console.log('pausa');
imprimirNumero(num2,num3);
console.log('pausa');
imprimirNumero(1,2,3,4,6,7,87,3,2,5,467,4,2);

// essa forma nos permite passar vários argumentos sem a necessidade de escrever cada um individualmente.