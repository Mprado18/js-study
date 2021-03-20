// Callback é uma função que faz uma ação após algum acontecimento no código;
// É possível realizar um callback com uma função setTimeOut
// Callbacks nos permitem executar o código de forma assíncrona

console.log("1");

setTimeout(function(){
    console.log("5");
},2000); /*irá executar o console após x tempo definido, retornando para trás no código, porém colocar o resultado após toda execução */

console.log("2");
console.log("3");
console.log("4");