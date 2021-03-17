// definimos um argumento para uma função e dentro da mesma retornamos outra função com um novo argumento

function lembrarSoma(x){
    return function(y){
        return x + y;
    }
}

// declaramos uma variável com a primeira função passando o primeiro argumento
// em seguida atribuimos um novo valor a variável, que irá somar com o primeiro valor (lembrando)
let soma1 = lembrarSoma(2); 
console.log(soma1(5));

let soma2 = lembrarSoma(5);
console.log(soma2(7));

function contador(i){
    let cont = i;
    let somarContador = function(){
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let meuContador = contador(5);
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();

let meuContador1 = contador(100);
meuContador1();
meuContador1();