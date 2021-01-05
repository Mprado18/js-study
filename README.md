# Roteiro de estudos JavaScript 

Este repositório tem como objetivo disponibilizar um roteiro de estudo pessoal, contendo diversas anotações e exemplos de funções, métodos, operadores, objetos da linguagem JavaScript.

*Este roteiro foi a minha forma pessoal que encontrei de estudar o tema, caso seja útil para mais alguém ficarei feliz em contribuir com o conhecimento.*

*Roteiro está aberto a sugestões de artigos, livros e demais informações úteis que podem agregar com os estudos de mais pessoas no futuro, fiquem a vontade para editar.*  :smile:

## Links úteis:
- [**Codewars**](https://www.codewars.com/users/sign_in "**Codewars**") - Site para realização de desafios em diversas linguagens;
- [**Editor online de Markdown Pandao**](https://pandao.github.io/editor.md/en.html "**Editor online de Markdown Pandao**") - Permite o desenvolvimento de arquivos Markdown em tempo real, com diversas ferramentas de fácil aplicação
- Documentação Mozilla - [**MDN Web Docs**](https://developer.mozilla.org/pt-BR/ "MDN Web Docs") (Português/Inglês)
- Documentação de várias linguagens e biblitecas - [**W3Schools**](https://www.w3schools.com "**W3Schools**") (Inglês)

## TIPOS DE DADOS
- **String**, todo valor que constar dentro de "" ou '' será considerado como String:

`"Hello World"`

`"1234"` - Se números estiverem dentro de aspas, serão declarados como String.

- **Number**, números poderão seguir de forma inteira, binária, decimal e até mesmo negativa, para isso não poderá constar dentro de aspas duplas ou simples:

`123` - Inteiro

`12.3`- JavaScript não entende vírgula como separador decimal

`-123` - Negativo

`001001` - Binário

`Infinty` - Será abordado melhor abaixo.

`-Infinty` - Será abordado melhor abaixo.

- Boolean **(true/false)**, são valores utilizados para realizar comparações, operações de comprações será abordado mais abaixo.

`typeof true // boolean;`

#### Valores especiais
- **Not a Number (NaN)**, é um valor cujo seu tipo não seja número:

`NaN;`

`typeof "a" * "b" // NaN`

- **Infinity ou -Infinity**, um valor que não é possível ser expressado visualmente, porém é um Number:

`typeof Infinity // Number`

## OPERADORES JS
- Operadores aritméticos:

```javascript
    `2 + 3 //executa uma adição simples`
    `5 - 12 //executa uma subtração simples`
    `4 * 4 //executa uma multiplicação simples`
    `5 / 3 //executa uma divisão simples`
    `20 % 2 //operador mod cálcula o resto de um valor`
    `> //serve para comparar se x é maior do que y`
     `< //serve para comparar se x é menor do que y`
    `>= //serve para comparar se x é maior ou igual à y`
    `<= //serve para comparar se x é menor ou igual à y`
```

` == //irá comparar se x é igual a y` - Aqui cabe um exemplo:
*Este operador tem um problema, pois ele compara igualdade, porém em alguns casos pode falhar:*

```javascript
    `1 == 1 //true` - ok 1 é igual a 1.
    `2 == 1 //false` - ok 2 é maior que 1, então não é igual.
    `"a" == 1 //false` - ok, uma string não é igual a um number.
    `"1" == 1 //true` - n/ok, aqui está o problema, pois se compararmos 1 number e 1 string ele acusa que são iguais, isos pode comprometer o código, nesse caso é aconselhável utilizar o operador ===.
```

`=== //irá comparar se o vlaor e o tipo de dado são iguais` - Alguns exemplos corrigindo a falha da comparação acima:

```javascript
`1 === 1 //true` - ok number é igual a number.
`"1" === 1 //false` - ok string não é igual a number, mesmo que seja o mesmo valor.
```

`!=`

`!==`

`&&`

`||`

`!`


- Operadores de comparação:

`10 > 2 // true;`

`5 > 500 // false;`
