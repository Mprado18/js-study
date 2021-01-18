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

Alguns métodos de arrays que tive mais contato e exemplos práticos:

`variável.pop()` -  irá remover um elemento no final de um array;
`variável.push()` - irá inserir um elemento no final de um array;

```javascript
let nomes = ["Marcos", "Angie", "Winky"]

nomes.pop("Winky") //nome Winky foi removido do array
nomes //se analisarmos o array irá conter apenas (2) ["Marcos", "Angie"]
nomes.push("Winky") //nome Winky foi incluída no array
nomes //se analisarmos o array irá conter (3) ["Marcos", "Angie", "Winky"]
```

`variável.shift()` - irá remover um elemento no inicio de um array;
`variável.unshift()` - irá inserir um elemento no inicio de um array;

```javascript
let nomes = ["Marcos", "Angie", "Winky"]

nomes.shift("Marcos") //irá remover o nome Marcos do Array
nomes //se analisarmos o array irá conter apenas (2) ["Angie", "Winky"]
nomes.unshift("Marcos") //irá incluir o nome Marcos no array
nomes //se analisarmos o array irá conter (3) ["Marcos", "Angie", "Winky"]
```

`variável.indexOf()` - irá encontrar um índice de um determinado elemento;
`variável.lastIndexOf()` - irá encontrar o último índice de um determinado elemento;

```javascript
let nums = [1,3,4,7,8,3]

nums.indexOf(3) //irá retornar o índice do valor 3 no array que é = 1
nums.lastIndexOf(3) //irá retornar o ínidce do valor 3 no array que é 5, caso só tenha um elemento, irá encontrar o único índice.
```

`variável.slice()` - irá retornar um array de outro array, para isso definimos os parâmetros de inicio e fim para o slice retornar o novo array;

```javascript
let array = [2,"Teste", "PS4", 18, "Final"]

array.slice(2) //irá retornar um array a partir do índice 2 ["PS4", 18, "Final"]
array.slice(2,4) //irá retornar um array a partir do índice 2 e antes do índice 4 ["PS4", 18]
array.slice(2,3) //irá retornar um array a partir do índice 2 e antes do índice  3 ["PS4"]
array.slice(-2) //irá retornar um array considerando o inicio do final [18, "Final"]
array.slice(0,-2) //irá retornar um array a partir do índice 0 e antes dos dois últimos índices [2, "Teste", "PS4"]
```

> Aqui cabe uma observação, pois o segundo parâmetro do slice irá pegar o valor definido -1.

`variável.forEach(parâmetro => {condição})` - irá executar uma função a cada elemento de um array;

```javascript
let nomes = ['Marcos', 'Angela', 'Erlete', 'Winky'];

nomes.forEach(nome =>{
    if(nome.length > 5){
    	console.log("O nome é " + nome);
	} else{
        console.log("O nome não atingiu a qtd mínima de caracteres")
    }
});
```
> Um dica que gosto de usar é usar a variável do array no plural e o parâmetro no singular para não confundir.

`variável.includes()` - irá verificar se um array tem um determinado elemento;

```javascript
let carros = ["Fiat", "BMW", "Chevy", "Ferrari"]

carros.includes("Chevy") //caso o elemento analisado esteja no array irá retorna true
carros.includes("Ford") //caso o elemento analisado não esteja no array irá retorna false
```

`variável.reverse()` - irá reverter qualquer array, nos trazendo um novo array ao contrário;

```javascript
let numeros = [0,1,2,3,4,5,6,7,8,9,10]

`numeros.reverse()` //irá trazer um novo array reverso [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

`variável.concat()` - irá concatenar dois ou mais arrays, retornando um array novo;

```javascript
let arr1 = [1,2,3]
let arr2 = ["Teste"]

arr1.concat(arr2) //irá concatenar no array definido e um outro o tornando um novo array [1, 2, 3, "Teste"]
```

`variável.toString` - irá converter um array em uma string;
```javascript
let arr = ["Marcos", 25, "Angie", 26]

arr.toString() //irá transformar todo o array em uma string "Marcos,25,Angie,26"
```

Mais métodos de arrays e exemplos de como aplica-los podem ser encontrando em: [**W3Schools**](https://www.w3schools.com/jsref/jsref_obj_array.asp "W3Schools")

Alguns métodos de string que tive mais contato:

`string.trim()` - irá remover todos os espaços em branco de uma string, inclui espaços por linhas puladas;
```javascript
let nome = "     Marcos  "

nome //"     Marcos  "
let nomeAjustado = nome.trim()

nomeAjustado //irá remover os espaços e quebras de linhas, deixando a string padrão"Marcos"
```

> Podemos evitar isso com expressões regulares também, deixando padronizado já antes do usuário ter a possibilidade de inserir de forma incorreta.

`string.padStart()` - irá padronizar a string de acordo com a regra aplicada;
```javascript
let id = "23"

id.padStart(6,0) //irá retornar um resultado de acordo com as regras definidas "000023"

let id2 = "2345"

id2.padStart(6,0) //"002345"
```

`string.split()` - irá separar uma string, transformando-a em um array de acordo com o argumento definido;
```javascript
let texto = "1 2 3 4 5 6 7 8"

texto.split(" ") //irá retornar um array (8) ["1", "2", "3", "4", "5", "6", "7", "8"]

let produtos = "Banana;Bola;Carro;Tv;PS4"
let produtosArray = produtos.split(";") //podemos definir o split dentro de uma nova variável específica como array

produtosArray //(5) ["Banana", "Bola", "Carro", "Tv", "PS4"]
```

`string.join()` - irá fazer um processo inverso ao split, pegará um array e irá transformar em uma string com um novo separador definido;
```javascript
let arr = ["Testando","este","texto"]

arr.join(" - ") //irá pegar um array e o transformará em string, de acordo com o separador definido "Testando - este - texto"
```

`string.repeat()` - irá repetir a string de acordo com a quantidade de vezes definida;
```javascript
let repertir = "Vou me repetir "

repetir.repeat(3) //irá repetir conforme a qtd declarada "Vou me repetirVou me repetirVou me repetir"
```

`string.concat()` - irá concatenar duas ou mais string, tornando uma nova string;
```javascript
let texto = "Amigo estou "

let texto2 = "aqui"

texto.concat(texto2) //irá concatenar uma string em outra definida, basicamente criando uma nova ou ajustando um atual "Amigo estou aqui"
```

`string.includes()` - irá verificar se uma string contém uma string/caracteres especificos;
```javascript
let textaoAleatorio = "Este texto @ é aleatório, apenas para @ teste do método"

textaoAleatorio.includes("@") //true
//irá retornar um boolen caso o valor esteja incluído na string 
```

`string.replace()` - irá checar uma string por um valor e substitui aquele valor por um novo na string;
```javascript
let str = "Meu nome é Marcos"

str.replace("Marcos","Prado") //irá substituir um valor de acordo com outro da string "Meu nome é Prado"
```

`string.slice()` - irá extrair uma parte de uma string, retornando uma nova string;
```javascript
let saudacao = "Hello Word"

saudacao.slice(6) //"Word"
```

> Funciona da mesma forma que o slice em arrays

`string.toUpperCase()` - irá converter toda string em letras maiúsculas;
`string.toLowerCase()` - irá converter toda string em letras minúsculas;
```javascript
nomeCompleto.toUpperCase() //"MARCOS PAULO ROCHA DO PRADO"
nomeCompleto.toLowerCase() //"marcos paulo rocha do prado"
```

Mais métodos de strings e exemplos de como aplica-los podem ser encontrando em: [**W3Schools**](https://www.w3schools.com/jsref/jsref_obj_string.asp "W3Schools")

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