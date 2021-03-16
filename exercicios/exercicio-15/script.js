// Valide se o número é primo;
// Um número primo é um número natural, maior que 1 e apenas divisível por si próprio e 1;

let num = 6;
let divisoes = 0;

for(let i = 1; i <= num; i++){

    if(num % i == 0){
        divisoes++;
    }
}

if(divisoes == 2){
    console.log(`O número ${num} é primo!`);
} else{
    console.log(`O número ${num} não é primo!`);
}