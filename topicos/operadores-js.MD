## OPERADORES JS
- Operadores aritméticos:

```javascript
    2 + 3 //executa uma adição simples;
    5 - 12 //executa uma subtração simples;
    4 * 4 //executa uma multiplicação simples;
    5 / 3 //executa uma divisão simples;
    20 % 2 //operador mod cálcula o resto de um valor.
```
- Operadores lógicos de comparação:

```javascript
> //serve para comparar se x é maior do que y, retorna um boolean;
< //serve para comparar se x é menor do que y, retorna um boolean;
>= //serve para comparar se x é maior ou igual à y, retorna um boolean;
<= //serve para comparar se x é menor ou igual à y, retorna um boolean.
```

` == //irá comparar se x é igual a y, retorna um boolean` - Aqui cabe um exemplo:
*Este operador tem um problema, pois ele compara igualdade, porém em alguns casos pode falhar:*

```javascript
    1 == 1 //true - ok 1 é igual a 1;
    2 == 1 //false - ok 2 é maior que 1, então não é igual;
    "a" == 1 //false - ok, uma string não é igual a um number;
    "1" == 1 //true - n/ok, aqui está o problema, pois se compararmos 1 number e 1 string ele acusa que são iguais, isso pode comprometer o código, nesse caso é aconselhável utilizar o operador ===.
```

`=== //irá comparar se o valor e o tipo de dado são iguais, retorna um boolean` - Alguns exemplos corrigindo a falha da comparação acima:

```javascript
1 === 1 //true - ok number é igual a number;
"1" === 1 //false - ok string não é igual a number, mesmo que seja o mesmo valor.
```

`!= //serve para realizarmos comprações de diferença, retorna um boolean`  - esse operador tem o mesmo problema que o == de igualdade, conforme exemplos:

```javascript
1 != 2 //true - ok 1 é diferente de 1;
1 != 1 //false - ok 1 não é diferente de 1;
1 != "a" //true - ok 1 number é diferente de string;
1 != "1" //false - n/ok 1 number é diferente de 1 em string, porém devido ter o mesmo valor o dado o sistema entende que não são diferentes.
```

`!== //serve para realizarmos comparações de diferença, tanto tipo de dado quanto valor, retorna um boolean` - esse operador assim como o === é mais preciso conforme exemplos:

```javascript
1 !== 1 //false - ok 1 number não é diferente de 1 number;
1 !== "1" //true - ok 1 number é diferente de 1 em string, mesmo sendo mesmo valor.
```

`&& //operador AND (E), retorna um boolean` - nos permite comparar mais de uma condição ao mesmo tempo, conforme exemplo:

*Para ser true os dois lados da comparação devem ser true.*
```javascript
100 === 100 && "abc" === "abc" //true - ok caso queira comparar identidade de valor e tipo de dado;
100 === 100 && "abc" == "cba" //true - ok caso queira comparar identidade de valor e tipo de dado no primeiro caso e apenas igualdade de tipo de dado no segundo caso;
10 != 1 && 10 === 20 //false - ok devido apenas um lado da comparação ser true.
```

`|| //operador OR (OU), retorna um boolean` - nos permite comparar uma condição ou outra ao mesmo tempo, conforme exemplos:

*Para ser true basta um dos lados da comparação ser true.*
```javascript
"Marcos" === "Marcos" || "Foo" === "Bar" //true - ok um dos lados da comparação é true;
28 === 27 || 43 === 23 //false - ok nenhum dos lados da comparação é true.
```

`! //operador NOT(NEGAÇÃO), retorna um boolean` - nos permite negar a condição boolean que seria retornada, conforme exemplos:

*Irá sempre negar a condigação atual caso esteja declarado.*
```javascript
!("teste" === 100) //true - ok string não é identica a number, temos o NOT;
!(10 === 10) //false - ok a comparação seria true por se tratar de dois numbers, mas temos o NOT;
!true //false - ok true vira false devido NOT;
!false //true - ok false vira true devido NOT.
```
