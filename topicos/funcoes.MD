## FUNÇÕES
Funções permitem a elaboração de comandos mais elaborados para nossos códigos.
*Existem alguns termos que algumas pessoas usam que são: Chamar / Invocar ou Executar para se referir quando ativamos uma função.*

As funções devem ser chamadas pelo seu nome + abrindo e fechando parênteses:
`funçãoTeste()`

É possível inserir parametros dentro de funções, o que pode servir para criar regras dentro da mesma e poderem alterar o resultado:
`funçãoSoma(x,y)`

- **Funções Built in:**

O que são funções built in? São funções nativas do JS que executam certos comandos já pré-definidos.

Alguns exmeplos abaixo:

`prompt()` - abre um um popup na tela do usuário permitindo que ele responda uma pergunta.

```javascript
let idade = prompt("Qual a sua idade?")
```
> Eu não curto muito usa-lo devido ser visualmente grosseiro e impede a navegação.

`alert()` - exibe um popup na tela do usuário com alguma mensagem.
```javascript
let msg = alert("Não esqueça de realizar login")
```

> Eu não curto muito usa-lo devido ser visualmente grosseiro e impede a navegação, atrapalhando o usuário.

`Math.x()` - são funções matemáticas que nos permites diversas operações de forma mais rápida.

Alguns dos métodos Math que mais tive contato até o momento:

`Math.abs(x)` - retorna o valor absoluto de x (positivo);
`Math.ceil(x)` - irá sempre arredondar o valor de x para cima;
`Math.floor(x)` - irá sempre arredondar o valor de x para baixo;
`Math.max(x, y, z, ..., n)` - irá retornar o maior valor entre todos definidos;
`Math.min(x, y, z, ..., n)` -  irá retornar o menor valor entre todos os definidos;
`Math.pow(x, y)` - irá retornar o valor de x a potência de y;
`Math.random()` - irá retornar um valor aletatório entre 0 e 1;
`Math.round(x)` - irá arredondar x para o número inteiro mais próximo (segue a lógica matemática do 5);
`Math.sign(x)` - irá retornar o o sinal de um número, validando se é positivo, negativo ou zero;
`Math.sqtr(x)` - irá retornar a raiz quadrada de x;
`Math.trunc(x)` - irá retornar a parte inteira de x.

Alguns exemplos na prática:
```javascript
Math.ceil(10.8) //11
Math.abs(20.3 + 10) //30.3
Math.abs(10-11) //1 - ao contrário do sign ignora o sinal
Math.abs(0-1) //1 - ao contrário do sign ignora o sinal
Math.floor(14.9) //14
Math.max(100,10,80,101) //101
Math.min(100,10.1,80,101) //10.1
Math.pow(2,2) //4
Math.random() //0.960268335642045
Math.random() //0.5160364178767631
Math.round(10.4) //10
Math.round(10.6) //11
Math.sign(10-11) //-1
Math.sign(0-0) //0
Math.sign(0-1) //-1
Math.sqrt(4) //2
Math.trunc(11.5) //11
Math.trunc(0.10) //0
```

Existem outros diversos métodos Math.x(x), para consulta-los e entender como são aplicaveis, sugiro o site da [**W3Schools.**](https://www.w3schools.com/jsref/jsref_obj_math.asp "**W3Schools.**")

`console.log()` - função muito utilizada para debuggar o código e também realizar testes se as regras do desenvolvimento estão funcionando corretamente. Poderemos validar os resultados diretamente na tela do navegador na opção console.

```javascript
console.log("Hello World");
let nome = Marcos;
console.log(`Olá ${nome}, seu template literals está funcionando!`) // Olá Marcos, seu templeta literals está funcionando!
```

- **Mais sobre funções:**

Funções são estruturas de códigos menores que podem ser reaproveitáveis em qualquer parte do programa.
As funções tem como principal objetivo poupar a repetições de código, deixando o código muitas vezes enorme e de dificil entendimento.

As funções devem ser chamadas pelo seu nome + abrindo e fechando parênteses:
`funçãoTeste()`

É possível inserir parametros dentro de funções, o que pode servir para criar regras dentro da mesma e poderem alterar o resultado:
`funçãoSoma(x,y)`

*É possível declarar uma função dentro de uma variável, muitas vezes essa função não tem nome, se tornando uma função anônima para aquela variável.*

Como declarar uma função:
```javascript
function imprimirNoConsole(){
	console.log("Hello World!");
}

imprimirNoConsole(); //após criar a função, devemos chama-lá para que seja executada.
```

Exemplo de função com parâmetro:
```javascript
const soma = function(a,b){
	return a + b; //irá retornar a soma dos números que foram declarados nos parêmetros a e b;
} 

soma(10,20); //irá retornar a soma de 10 + 20 = 30.
```

```javascript
const saudacao = function(nome){
	if(nome === "Marcos"){
		return "Olá Marcos, seja bem vindo!";
	}
}

saudacao("Marcos");
```

Uma função tem seu próprio escopo, caso tenha uma variável com nome x no escopo global (fora do escopo da função, arquivo total JavaScript) e seja declarado uma variável com nome x dentro da função seu valor será diferente e o que valerá para função é a que está dentro do seu escopo.

Exemplo:
```javascript
let n = 10;

function imprimir(){
	let n = 20;
	console.log(n);// irá imprimir o valor de n que consta declarado dentro do escopo da função;
}

imprimir();

console.log(n); //irá imprimir o valor de n que consta declarado no escopo global.
```
