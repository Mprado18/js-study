function soma(a,b){
    if(a === undefined || b === undefined){
        console.log("Precisa ter os dois argumentos");
    } else{
        return a + b;
    }
}

console.log(soma(1));

console.log(soma(1,2));

//está considerando um argumento opcional, caso não seja passado não teremos problemas
function saudacao(nome, idade){
    if(idade === undefined){ 
        console.log("Olá " + nome);
    } else{
        console.log("Olá " + nome + " você tem " + idade + " anos!");
    }
}

saudacao("Marcos");

saudacao("Paulo", 24);