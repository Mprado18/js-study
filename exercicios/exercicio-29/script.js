// Adicione a propriedade janelas no objeto ônibus com valor de 20;
// Delete a propriedade rodas;
// Imprima a propriedade janelas no console

let onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2
}

console.log(onibus.rodas);
console.log(onibus.passageiros);
console.log(onibus.portas);

delete onibus.rodas;
console.log(onibus.rodas);

onibus.janelas = 20;
console.log(onibus.janelas);

console.log(onibus);