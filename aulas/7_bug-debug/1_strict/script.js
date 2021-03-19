/* O use strict é uma forma que nos permite evitar possíveis erros em nosso códigos, barrando por exemplos declarações de variável errada.
*/

"use strict" //irá aplicar ao código inteiro

opa = "teste"; // errado: Uncaught ReferenceError: Cannot access 'opa' before initialization
let opa = "teste"; // certo

function teste(){
    //"use strict" << irá aplicar apenas nesta função
    let testando = "teste";
}

teste();