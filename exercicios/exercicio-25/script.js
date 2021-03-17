// Escreva uma função que recebe um número, e o decrementa de 1 em 1 com algum loop;
// Além disso, deve ser impresso apenas os números pares no console

function imprimePar(num){
    for(let i = num; i >= 0; i--){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

imprimePar(10);
imprimePar(100);