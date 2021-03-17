// recursion é a possibilidade de uma função ficar se chamando até que seja parada

function recursao(n){
    if(n - 1 < 2){
        console.log("Recursão parou");
    } else if(n % 2 != 0){
        console.log("Número ímpar " + n);
        recursao(n - 1); //chamamos a função novamente decrementando até que seja atingido o resultado do IF
    } else{
        console.log("Número par " + n);
        recursao(n - 2); //chamamos a função novamente decrementando até que seja atingido o resultado do IF
    }
}

recursao(39);
recursao(10);
recursao(55);