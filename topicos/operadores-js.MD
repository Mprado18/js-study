## OPERADORES JS
- Operadores aritméticos:

```javascript
    2 + 3 //executa uma adição simples
    5 - 12 //executa uma subtração simples
    4 * 4 //executa uma multiplicação simples
    5 / 3 //executa uma divisão simples
    20 % 2 //operador mod cálcula o resto de um valor
    > //serve para comparar se x é maior do que y
    < //serve para comparar se x é menor do que y
    >= //serve para comparar se x é maior ou igual à y
    <= //serve para comparar se x é menor ou igual à y
```

` == //irá comparar se x é igual a y` - Aqui cabe um exemplo:
*Este operador tem um problema, pois ele compara igualdade, porém em alguns casos pode falhar:*

```javascript
    1 == 1 //true - ok 1 é igual a 1.
    2 == 1 //false - ok 2 é maior que 1, então não é igual.
    "a" == 1 //false - ok, uma string não é igual a um number.
    "1" == 1 //true - n/ok, aqui está o problema, pois se compararmos 1 number e 1 string ele acusa que são iguais, isso pode comprometer o código, nesse caso é aconselhável utilizar o operador ===.
```

`=== //irá comparar se o valor e o tipo de dado são iguais` - Alguns exemplos corrigindo a falha da comparação acima:

```javascript
1 === 1 //true - ok number é igual a number.
"1" === 1 //false - ok string não é igual a number, mesmo que seja o mesmo valor.
```

`!=`

`!==`

`&&`

`||`

`!`


- Operadores de comparação:

`10 > 2 // true;`

`5 > 500 // false;`