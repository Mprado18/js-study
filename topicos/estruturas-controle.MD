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