// Crie dois arrays, um com mais de 5 itens e outro com menos;
// Crie uma função que verifique o total de itens no array;
// Caso possua menos que 5 itens, imprima "Poucos itens no array";
// Caso possua mais que 5 itens, imprima "Muitos itens no array"

let itens = ["Batata", "Pão", "Carne"];
let itens2 = [1,2,3,4,5,6,7,8,9];

function verificarItens(arr){
    if(arr.length >= 5){
        console.log("Muitos itens no Array");
    } else{
        console.log("Poucos itens no Array");
    }
}

verificarItens(itens);
verificarItens(itens2);