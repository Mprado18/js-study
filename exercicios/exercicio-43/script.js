// Crie uma regex que aceite a seguinte expressão: Marca: nomeDaMarca
// nomeDaMarca pode variar entre Nike, Adidas, Puma, Asics;
// Realiza teste validando a regex

const validarMarca = /\Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validarMarca.test("Marca: Nike"));
console.log(validarMarca.test("Nike"));
console.log(validarMarca.test("Marca: Adidas"));
console.log(validarMarca.test("Marca: Puma"));
console.log(validarMarca.test("Marca: Asics"));
console.log(validarMarca.test("Adidas: Asics"));
console.log(validarMarca.test("Marca: Ferrari")); //não é uma marca permitida