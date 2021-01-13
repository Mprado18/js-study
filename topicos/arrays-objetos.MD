## ARRAYS E OBJETOS JS

- **Sobre arrays:**

Os arrays são conjunto de valores que podemos declarar em variáveis.
Devem ser escritos dentro de [] e separados por vígulas, não possui restrição com tipos de dados.

`let array [1,2,3,4,5]`
`let array2 [1, "banana", 2, "laranja"]`

Não há necessidade de colocar espaços entre as vírgulas, porém fica melhor vísivel o código.

Os arrays podem ser acessados pelo nome da variável e pelos seus índices, sua contagem começa sempre com 0, sendo este o primeiro.

Exemplo, quero pegar o item dois do array2 acima, seria desta forma: `array2[1]` - //irá imprimir "banana".

Como uma array possui muitas informações, é possível realizarmos um loop do mesmo, criando condições para tirarmos um item específico em caso de necessidade.

Exemplo:
```javascript
let nomes = ["Marcos", "Angie", "Winky"];

for(let i = 0; i < nomes.lenght; i++){
	return nomes[i]; //irá retornar cada nome dentro do array
}
```

Dessa forma podemos criar condições que nos permitam acessar apenas algo especifico do array para trata-lo caso necessário, não precisando ter que declarar o índice de forma manual.

- **Propriedades:**

As propriedades são informações que podemos acessar de quase todos os valores no JS.
Apenas null e undefined não possuem propriedades.

É possível acessar de duas formas:
`valor.nome da propriedade`
`valor['nome da propiedade']`

Exemplos:
```javascript
let numeros = [1,2,3,4,5];
numeros.lenght; //irá imprimir a quantidade de dados que existem no array.
```

```javascript
let nome = "Marcos";
nome.lenght; //irá imprimir quantos caracteres possui o nome.
```

As propriedades também podem ser criadas dentro de objetos, será abordado mais abaixo.

- **Métodos:**

Os métodos são como propriedades, porém que funcionam como funções (e seu tipo de dado é considerado como function).
Strings e Arrays possuem métodos e a forma de chama-la é:

`string.nome do método()`
> Apenas não podemos esquecer de colocar () após o nome do método, se não o mesmo não irá funcionar.

Os métodos nos permitem manipular ou conseguir informações desses dados, sem ter que criar muitas linhas de código para isso.

Exemplo:
```javascript
let marca = "sony";
console.log(marca.toUpperCase()); //irá imprimir o valor de marca todo em maiúsculo, SONY;
```

- **Objetos:**

Os objetos são uma coleção de propriedades que nós podemos criar que armazenam valores como se fossem arrays.
É possível acessar cada propriedade criada dentro de um objeto da mesma forma que chamamos uma propriedade nativa do JS.

Objetos são comumente utilizados a POO (promgração orientada a objetos).

Exemplo de criação de um objeto:
```javascript
let cachorro = {
	patas: 4,
	nome: "Rex"
}

console.log(cachorro.nome); //teremos o valor da propriedade nome do objeto cachorro.
```
> Devemos nos atentar que cada propriedade será separada por vírgula.

Também podemos criar nosso próprios métodos para um ou mais objetos.

Complemento ao exemplo acima com criação de método:
```javascript
let cachorro = {
	patas: 4,
	nome: "Rex"
	latir: function(){
		console.log("au au");
	}
}

console.log(cachorro.nome); //teremos o valor da propriedade nome do objeto cachorro.
cachorro.latir(); //irá imprimir a msg declarada dentro da função método do objeto cachorro.
```

Temos a possibilidade de atribuir ou deletar propriedades de um objeto.

Exemplos:
```javascript
let personagem = {
	nome: "Kratos",
	poder: "Todos dos Deuses gregos",
	arma: "Blades of Chaos"
}

console.log(personagem.poder); //irá imprimir o valor da propriedade poder.
delete personagem.poder; //irá deletar a propriedade poder.
console.log(personagem.poder); //irá imprimir undefined, devido a propriedade ter sido deletada.

personagem.idade = "Desconhecida"; //para adicionar colocar o objeto.nome da propriedade = valor
console.log(personagem.idade); //irá imprimir o valor da nova propriedade idade que foi adicionada.
```

Caso tenhamos um objeto definido e precisemos herdar as propriedades deste objeto para outro.
Com o método `assign`, podemos herdar propriedades de um outro objeto.

Exemplo:
```javascript
let carro = {
	portas: 2,
	portamala: "2001",
	motor: "2.0"
}

let adicionais = {
	tetosolar: true,
	arcondicionado: true,
}

console.log(carro); //irá imprimir apenas as propriedades que temos no objeto carro.

Object.assing(carro, adicionais); //estamos pegando o objeto carro e incluindo as propriedades do objeto adicionais nele.

console.log(carro); //irá imprimir todas as propriedades que já tinham no objeto carro e as novas propriedades do objeto adicionais que foram incluídas.
```

Com o método keys, podemos verificar quais as chaves cada objeto possuí.
Isto nos permite validar se um objeto x, possui uma chave y necessário no mesmo.

Exemplo:
```javascript
let obj = {
	chave1: 1,
	chave2: 2,
	chave3: 3
}

console.log(obj); //irá trazer todas as chaves/propriedades de um objeto, porém não poderemos trata-las.

console.log(Object.keys(obj)); //este método irá apresentar em forma de array todas as chaves, possibilitante tratamento.
```

Quando tratamos sobre objetos, temos a possibilidade de mutação (mutability), podemos criar um objeto com as mesmas caracteristicas de um outro objeto, tornando-o uma referência ao mesmo.

Exemplo:
```javascript
let pessoa {
	nome: "Marcos"
}

let pessoa2 = pessoa; //cria referência entre objetos

let pessoa3 = {
	nome: "Marcos"
}

pessoa == pessoa2 //irá imprimir true, devido os objetos serem iguais.
pessoa == pessoa3 //irá imprimir false, mesmo as propriedades sendo iguais, não possuem uma referência entre si.

pessoa2.nome = "Prado";
console.log(pessoa.nome); //como os objetos estão referenciados, caso seja alterado alguma propriedade em um, afetará em todas suas referências.
```