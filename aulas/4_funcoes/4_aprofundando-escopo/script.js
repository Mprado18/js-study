let x = 10; //escopo global

if(x > 5){
    let x = 20; //escopo da função
    x++;
    console.log(x); //imprime os valores do console do escopo da função
}

console.log(x); //imprime o valor da variável do escopo global