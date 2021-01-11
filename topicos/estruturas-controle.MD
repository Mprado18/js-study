## TIPOS DE ESTRUTURAS DE CONTROLE
O programa será executado de cima para baixo, com estas estruturas, poderemos validar os valores de statments ou expressions e possibilitar a tomada de rumo diferente no fluxo do código.

- **Estrutura de controle If (SE):**

O if serve para que possamos executar um bloco de código mediante uma pergunta ou regra, se tal coisa for verdadeira, executa um bloco de código, caso seja falso executa outro bloco de código.

`if(comparação){código caso seja verdadeiro}`

Exemplos:
```javascript
let idade = 17;
if(idade > 18){
	console.log("A idade não é maior que 18!")
}
```
```javascript
let nome = "Marcos";
let idade = 25;
if(nome === "Marcos" && idade > 18){
	console.log("Pessoa e idade confere, liberado para entrar!")
}
```
```javascript
let nome = "Angie";
let idade = 20;
let passaporte = true
if(nome === "Angie" && idade > 25 || passaporte === true){
	console.log("Liberada!")
}
```

- **Estrutura de controle Else (SENÃO/OUTRO(A)):**

O else é um complemento ao if, pois caso o if não seja verdadeiro, o bloco de código não será executado e irá para o else executar sua condição.

`if(comparação){código caso seja verdadeiro}else{código caso seja falso}`

Exemplos:
```javascript
let velocidade = 100;
if(velocidade <= 80){
	console.log("Não foi multado!");
} else {
	console.log("Foi multado!");
}
```
```javascript
let nome = "Marcos";
if(nome === "Marcos"){
	console.log("Olá " + nome + " seja bem vindo(a)!");
} else {
	console.log("Olá, você não é o Marcos, mas seja bem vindo(a) também!");
}
```

- **Estrutura de controle else if(SENÃO/OUTRO(A)):**

O else if serve para aplicar-mos condições mais complexas e detalhadas dentro de um if, nos permitindo aplicar diversos ifs dentro deste conjunto.

`if(comparação) {código caso seja verdadeiro} else if (segunda ...n comparação) {código caso seja verdadeiro a segunda ...n condição} else {código caso seja falso}`

Exemplos:
```javascript
let idade = 15;
let altura = 1.65;
if(idade >= 15 && altura >= 1.65){
	console.log("Ok, pode entrar na montanha russa sem os Pais!");
} else if(idade < 15 || altura >= 1.65){
	console.log("Ok, pode entrar na montanha russa, porém apenas com os Pais!");
} else {
	console.log("Idade e altura abaixo do permitido, não pode entrar na montanha russa!")
}
```

- **Estruturas de repetição:**

A ideia desses códigos é executar loops que fiquem repetindo um bloco de código diversas vezes até que o mesmo chegue a uma certa condição final.
Isso evita que fiquem criando diversos blocos de códigos separados para realizar esse loop de repetição.
*Sempre devemos definir uma condição final para que o loop acabe, ou teremos um loop infinito, podemos atrapalhar a usabilidade da aplicação.*

`while(condição){código caso seja verdadeiro que seja repetido até finalizar.}`

Exemplos:
```javascript
let x = 10;
while(x > 0){
	x = x - 1;
	console.log("O valor de x é " + x) //irá imprimir no console o valor de cada x após condição.
}
```

```javascript
let y = 0;
while(y <= 10){
	y = y + 1;
	console.log("O valor de y é " + x); //irá imprimir no console o valor de cada y após cada execução.
}
```

```javascript
let z = 10;
while(z > 0){
	console.log(z); //irá imprimir no console o valor de cada z de forma infinita, pois não foi declarada uma condição de finalização.
}
```

`do{código de execução} while(condição verdadeira de finalização)`

Exemplos:
```javascript
let x = 30;
do{
	x = x - 5;
	console.log(x) //irá imprimir no console o valor de x após cada execução.
} while(x >= 0);
```
> Eu particularmente acho essa estrutura um pouco mais confusa, optando melhor por um for ou while.

`for(variável; condição comparação; condição incremento/decremento){bloco de retorno ou novas condições}`

Exemplo:
```javascript
for(let i = 0; i < 100; i = i + 2){
	console.log("O valor de i é " + i)
}
```

`break` - serve para parar a execução de um loop, assim que alguma condição especifica ser atendida.

Exemplo:
```javascript
let nome = "Marcos";
for(let i = 0; i < 10; i++){
	if(i == 3){
    nome = "João";
    } else if(i == 5 && nome == "João"){
		console.log("O nome é João, pode parar");
        break;
    }
    console.log(i); //irá imprimir o valor do i até a condição ser finalizada.
}
```
***Este exemplo foi feito com incrementação reduzida (tema abordado mais abaixo).***

`continue` - é o contrário do break, irá continuar a execução dependendo de certa condição definida.

Exemplo:
```javascript
for(i = 10; i > 0; i = i-1){
	if(i % 2 == 0){
		console.log("Número é par, caiu no continue);
		continue
	}
	console.log(i); //irá exibir o valor de i quando for ímpar.
}
```
***Este exemplo foi feito sem incrementação reduzida (tem abordado mais abaixo).***

- **Incrementação reduzida:**

"x"`+=` //irá somar um valor definido a x;

"x"`++` //irá incrementar de 1 em 1 o valor do x;

"x" `--` //irá decrementar de 1 em 1 o valor de x (exemplo anteriormente);

Exemplos:
```javascript
let numero = 5;
while(numero < 50){
	numero += 10;
	console.log(numero); //irá imprimir o valor de numero somado a cada 10.
}
```

```javascript
for(let i = 0; i < 10; i++){
	console.log(`O valor de i é ${i}`);
}
```

`switch/case` - é um abordagem para quando se precisa utilizar vários ifs dentro de um condição.
Para que saia de um case, podemos aplicar o uso de um break.

Exemplo:
```javascript
let nome = "Marcos";
switch(nome){
	case "Marcos":
		console.log("O nome é Marcos");
		break;
	case "Angie":
		console.log("O nome é Angie");
		break;
	default: 
		console.log("Nome não foi encontrado!")
		break;
}
```
> Caso seja esquecido de colocar o break, o sistema irá entender que o case deu certo e irá ir executando até encontrar um break.