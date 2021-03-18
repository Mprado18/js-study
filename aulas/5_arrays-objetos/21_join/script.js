let frase = "Testando o método split";

let palavras = frase.split(" ");

let novaFrase = palavras.join("*");

console.log(novaFrase);

let texto = "Testando este texto aqui";

console.log(texto.join("-"))

// Join nos permite pegar um array e transformar em string de acordo com um separador (inversão ao split)