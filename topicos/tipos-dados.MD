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

#### Empty values
- Undefined, é o caso de algum valor indefinido: `undefined`
- Null, é o caso de valor nulos: `null`

Esses valores são palavras reservadas no JS, ou seja, sempre que nos depararmos com os mesmos quer dizer que o valor não existe.
Também não é possível criar variável com o mesmo nome desses valores.

Exemplo caso seja criado uma variável com nome desses valores: `VM1237:1 Uncaught SyntaxError: Unexpected token 'null'`