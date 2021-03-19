// Tratamento de erro por input, evitando que o usuário incluia uma informação incorreta

function checarNumero(num){
    let number = Number(num);
    if(Number.isNaN(number)){
        alert("Por favor, passe somente números para o programa");
    } else{
        return number;
    }
}

checarNumero(5);
checarNumero("shud");

let number = prompt("Digite um número");

checarNumero(number);