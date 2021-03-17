let y = 10; //escopo global

function imprimir(){
    let y = 150;

    console.log(y); //escopo da função
}

imprimir(); //imprime os valores do console do escopo da função

console.log(y); //imprime o valor da variável do escopo global