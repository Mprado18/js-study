// função considerando um argumento default, caso não seja passado o sistema considera o já definido
function potencia(base, exp=2){
    return Math.pow(base, exp);
}

console.log(potencia(2));

console.log(potencia(2,2));

console.log(potencia(2,3));