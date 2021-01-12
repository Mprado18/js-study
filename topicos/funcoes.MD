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

- **Escopos:**

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

Está separação de escopo também acontecem com um if por exemplo:
```javascript
let x = 10;

ir(x > 5){
	let x = 20;
	x++;
	console.log(x); //irá imprimir o valor incrementado de x declarado dentro do if.
}

console.log(x); //irá imprimir o valor de x fora do escopo do if.
```
> Devemos apenas cuidar, pois essa regra de separação de escopo aplica-se a declarações feitas com let e const, com var não possui essa definição do escopo separado.

Ainda sobre escopo, temos a opção de **Nested scopes (escopo aninhado)**, é a possibilidade de ter vários escopos dentro de escopos, separando-os em níveis, parecido com HTML quando ainhamos uma tag a outra.

Exemplo:
```javascript
let num = 10;

function multiplicar(x,y){
	let num = x * y;
	
	if(num > 10){
		let num = 0;
		num++;
		console.log(num); //irá imprimir o incremento no num do escopo if.
	} 
	console.log(num); //irá imprimir o resultado da multiplicação do escopo function.
}

console.log(num); //irá imprimir o valor 10 declarado no escopo global.

multiplicar(3,7);
```

- **Arrow function:**

É uma outra forma de declarar funções, são bastante utilizadas em frameworks mais modernos.
> Visualmente acho a arrow function mais elegante, porém ainda tenho mais adaptabilidade com a function normal.

Essas funções não recebem um nome e são declaradas em uma variável.

Formas de declarar, podendo ser utilizado const ou let:
`const parOuImpar = (parâmetro) => {corpo da função e condições}`

Exemplos:
```javascript
const consoleTeste = () => {
	console.log("Olá mundo!");
}

consoleTeste () //irá imprimir a msg definida dentro da arrow function.
```

```javascript
let soma = (a,b) => {
	return a + b;
}

soma(10,15); //irá imprimir a soma definida no corpo da arrow function.
```
*A forma de chama-la seria pelo nome da váriavel a qual foi declarada.*

A arrow function permite a possibilidade de diminuir e retirar os parenteses do código deixando-a apenas em uma linha de forma mais resumida caso tenha apenas um parâmetro.

Exemplo:
```javascript
let multiplicarPorDois = x => x * 2;

multiplicarPorDois(2);
```

> Acredito que por isso eu prefira um pouco mais a function normal, pois mesmo o código ficando maior, a leitura e entendimento do mesmo ficará mais fácil visualmente.

- **Parâmetros opcionais ou default em funções:**

No JS podemos criar funções com parâmetros opcionais para caso não seja informado alguma informações dessas.

Exemplo:
```javascript
function infos(nome, idade){
	if(idade === undefined){
		return "Olá, seu nome é " + nome;
	} else {
		return "Olá seu nome é " + nome + " e sua idade é " + idade + " anos";
	}
}

infos("Marcos"); //irá imprimir apenas a msg configurada no if
infos("Marcos",25); //irá imprimir a msg configurada no else
```
*Dessa forma caso o parâmetro idade não seja obrigatório, o código não impedirá a navegação do usuário, tornando o site um pouco mais flexível a alguns quesitos.*

Já com as funções com parâmetros default, podemos deixar definido um valor x e caso o usuário não o informe, o sistema irá considera-lo.

Exemplo:
```javascript
function calcPotencia(base, exp=2){
	return Math.pow(base,exp);
}

calcPotencia(2); //irá imprimir a potência de acordo com o exp default definido
calcPotencia(2,3); irá imprimir a potência de acordo com o novo exp definido.
```

- **Closure e Recursion:**

O closure é uma função que se nos permite lembrar do ambiente ou escopo léxico em que ela foi criada.

Exemplos:
```javascript
function lembrarSoma(x){
	return function(y){
		return x + y;
	}
}

let soma1 = lembrarSoma(2);
console.log(soma1(5)); //irá imprimir a soma, lembrando inicialmente o valor de x que já havia sido declarado.
```

```javascript
function contador(i){
	let cont = i;
	let somarContador = function(){
		console.log(cont);
		cont++;
	}
	return somarContador;
}

let meuContador = contador(5); //irá imprimir o primeiro valor atribuido a i;
meuContador(); //irá incrementar o valor inicial de i, lembrando assim que o primeiro foi o 5;
meuContador(); //irá incrementar o valor inicial de i, lembrando assim que o primeiro foi o 5;
meuContador(); //irá incrementar o valor inicial de i, lembrando assim que o primeiro foi o 5;
```

O recursion permite que chamemos uma função diversas vezes para se chegar a um objetivo.

Exemplo:
```javascript
function recursao(n){
	if(n - 1 < 2){
		console.log("Recursão parou!");
	} else if(n % 2 != 0){
		console.log("Número ímpar " + n);
		recursao(n - 1);
	} else {
		console.log("Número par " + n);
		recursao(n - 2);
	}
}

recursao(39); //a função irá sendo chamada diversas vezes até que entre na primeira condição do if e pare.
```
> Para esses casos é preferível o uso de um loop, pois o entendimento do código poderá ficar melhor.

Mais sobre closure: **[MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures "MDN")**