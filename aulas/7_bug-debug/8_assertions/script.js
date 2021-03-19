// Assertion são verificações no programa para assegurar que tudo ocorra da forma esparada

let arr = [1, 2, 3, 4, 5];
let arr2 = [];

function iterarArray(arr){
    if(arr.length == 0){
        throw new Error("O array precisa ter pelo menos um elemento");
    } else{
        for(let i = 0; i < arr.length; i++){
            console.log(i);
        }
    }
}

function arrayVazio(arr){
    if(arr.length > 0){
        throw new Error("O array não pode ter elementos");
    } else{
        console.log("Agora deu certo");
    }
}

iterarArray(arr);
// iterarArray(arr2); //irá gerar erro devido não ter elementos no array

// arrayVazio(arr); //irá gerar erro devido ter elementos no array
arrayVazio(arr2);