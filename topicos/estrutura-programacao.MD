## ESTRUTURAS DE PROGRAMAÇÃO
- **Variáveis:**
Variáveis são os meios que usamos para salvar valores e posteriormente podermos usa-las em funções, expressões e etc.

`let` - veio para substituir o var, exemplos:

```javascript
let nome = "Marcos" //declarando uma string;
let laranjas = 5; //declarando number
let um = 1, dois = 2, tres = 3; //possibilidade de declarar mais de uma variável na mesma linha.
```
Algumas possibilidades de concatenação utilizando valores armazenados em variáveis:
```javascript
`Olá meu nome é ${nome}` //Olá meu nome é Marcos, forma de concatenar via template literals
"A loja possui " + laranjas + " laranjas" //A loja possui 5 laranjas, forma de concatenar com sinal de +
```
`const` - Forma de declarar constante, será uma variável que não permitirá alteração durante o código, exmeplo armazenar um IP fixo que não deverá ter alteração.
`const ip = "127.0.0.1"`

*A partir do JavaScript ES6 as variáveis começaram a poder ser declaradas com **let** ou **const**, porém é possível o uso do **var** ainda ou encontrar códigos mais antigos com esse tipo de declaração*
> Só temos que cuidar, pois podem possuir navegadores não possuem compatibilidade com o let, nesse caso, deveremos optar pelo uso do var.

**- Formas permitidas de declarar nome em variáveis:**

Para declaração de variável não podemos utilizar palavras reservadas do JS, exemplo dado em outro tópico com null.

Dessa forma coloco alguns exemplos abaixo não permitidos:
```javascript
let 1teste //VM126:1 Uncaught SyntaxError: Invalid or unexpected token;
let teste. //VM246:1 Uncaught SyntaxError: Unexpected token '.';
let teste@ //VM269:1 Uncaught SyntaxError: Invalid or unexpected token;
let teste! //VM304:1 Uncaught SyntaxError: Unexpected token '!'.
```

Caracteres especiais permitidos:
```javascript
let $teste //permitido e comumente utilizado em JQuery.JS;
let _teste //permitido e comumente utilizado em Underscore.JS;
let teste, //permitido devido a possibilidade de declaração de várias varáveis na mesma linha.
```

Possibilidades corretas de declaração de variáveis:
```javascript
let nome = "Marcos" //forma normal utilizada para nomes de uma palavra;
let Nome = "Marcos" //pode ser utilizada dessa forma, mas vai de gosto pessoal com a primeira maiúscula;
let meu_primeiro_nome = "Marcos" //pode ser utilizado dessa forma para gerar organização; 
let meuprimeironome = "Marcos" //pode ser utilizado, porém fica confuso devido ser um texto corrido;
let meuPrimeiroNome = "Marcos" //forma mais utilizada para melhor organização visual, técnica chamada camelCase.
```

**- Palavras reservadas:**
Abaixo coloco uma listagem de algumas palavras reservadas que não podem ser utilizadas de forma direta para declarar variável:

`break
case
catch
class
const
continue
debugger
default
delete
do
else
enum
export
extends
false
finally
for
function
if
implements
import
interface
in
instanceof
let
new
package
private
protected
public
return
static
super
switch
this
throw
true
try
typeof
var
void
while
with
yield`

Estas são algumas das palavras que não podemos utilizar de forma direta para nomear uma variável, porém é possível usa-la colocando mais algum nome em conjunto:
```javascript
let public //irá retornar erro
let publicTest //irá permitir devido não ser usado de forma direta
const functionTest ////irá permitir devido não ser usado de forma direta
```
