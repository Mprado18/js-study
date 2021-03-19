// Podemos configurar erros para caso um informação de entrada seja incorreta
// Irá parar a aplicação e dizer onde e o tipo do erro

function saudacao(nome){
    if(typeof nome != "string"){
        throw new Error("O parametro nome precisa ser uma string");
    } else{
        console.log(`Olá ${nome}.`);
    }
}

saudacao("Marcos");
saudacao(5); //só recebe string, irá gerar erro e apresentar a msg definida no if

console.log("teste");