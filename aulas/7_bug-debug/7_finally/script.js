// finally irá executar um bloco de código independente se der erro ou não

//let b = 2;

try {
    let a = 2 + b;
} catch(e){
    console.log(e);
} finally{
    console.log("Executou")
}

console.log("Teste");