// Escreva uma função que recebe a idade de uma pessoa;
// Caso tenha mais que 18 anos pode iniciar na auto-escola;
// Caso tenha menos que 18 anos não pode iniciar na auto-escola
// Execute a função para os dois casos

function podeEntrar(idade){
    if(idade >= 18){
        console.log("Você já tem a idade mínima permitida para iniciar na auto-escola")
    } else{
        console.log("Você ainda não tem a idade mínima permitida para iniciar na auto-escola")
    }
}

idade(21);
idade(16);