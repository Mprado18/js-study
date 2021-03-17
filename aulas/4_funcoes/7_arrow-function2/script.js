//forma normal de declarar arrow function

const multiplicarPorDois = (x) =>{
    return x * 2;
}

console.log(multiplicarPorDois(2));

/*forma reduzida de declarar arrow function quando houver apenas um parametro, tomar cuidado devido leitura e manutenção do código.*/

const multiplicarPorDois2 = x => x * 2;
console.log(multiplicarPorDois2(4));