// Crie um array a partir de uma frase(string)
// Imprima cada palavra do array no console por meio de um for

let frase = "Eu gosto de desenvolver demais";

console.log(frase.split(" "));

let virouArray = frase.split(" ");

virouArray.forEach(i => {
    console.log("Imprimindo cada palavra = " + i);
});

for(let i = 0; i < virouArray.length; i++){
    console.log(virouArray[i]);
}