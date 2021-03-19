// Try irá tentar executar um código, caso tenha algo errado irá cair no catch
// Muito útil para realizar debugs

let b = 2;

try {
    let a = 2 = b;
} catch(e){
    console.log(e);
    /*throw new Error(e); se deixar este ativo irá travar o código com o erro, se não o código irá executar apenas onde não tiver o erro*/
}

console.log('Teste');