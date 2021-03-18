//assing permite unirmos outras propriedades de objetos a outros objetos

let carro = {
    portas: 2,
    portamalas: '220l',
    motor: '2.0',
}

let adicionais = {
    tetosolar: true,
    arcondicionado: true,
}

console.log(carro);

Object.assign(carro,adicionais); //aqui unimos as propriedades do objeto adicionais no objeto carro

console.log(carro);
