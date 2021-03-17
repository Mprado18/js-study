// Escreva uma função que detecta o tipo de dado passado;
// Verifique se é um number, boolean ou string;
// Execute uma função e retorne uma mensagem no console para cada caso;


function verificarDado(dado){
    if(typeof dado === 'number'){
        console.log("Este dado é um number");
    } else if(typeof dado === 'string'){
        console.log("Este dado é uma string")
    } else if(typeof dado === 'boolean'){
        console.log("Este dado é um boolean")
    } else{
        console.log("Este dado é undefined");
    }

}

verificarDado(10);
verificarDado(true);
verificarDado("Marcos");
verificarDado();