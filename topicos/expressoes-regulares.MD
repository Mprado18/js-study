## EXPRESSÕES REGULARES

As expressões regulares é uma forma de encontrarmos padrões em strings, isso nos facilita, evitando que tenhamos de criar diversas funções complexas.
As expressões regulares também são chamadas de **regex**.

As expressões regulares no JS são um tipo de objeto, podemos cria-la de duas formas:

`let reg1 = new RegExp("teste")`

`let reg2 = /teste/`

Exemplos:
```javascript
const reg1 = new RegExp("sorvete")

reg1.test("Tem sorvete?") //true
reg1.test("Não tem?") //false
```

```javascript
const reg2 = /carne/

reg2.test("Tem carne?") //true
reg2.test("Não tem?") //false

let texto = "Tem carne no mercado"
reg2.text(texto) //true
```

Estes exemplos mostram a criação de uma regex das duas formas possíveis e a validação que a mesma está realizando, quando a validação é atendida, teremos um retorno boolean de *true* e quando não é atendida teremos *false*.

No segundo caso vemos que podemos validar uma regex em um valor de variável também.

O regex nos permite validar também se conjuntos de caracteres estão em uma string:

Para verificar um conjunto utilizamos: `[valor]`

Também temos a possibilidade de verificar um intervalo especifico caso necessário:

Para verificar um intervalo em um conjunto utilizado `[0-9]` ou outro intervalo que desejemos.

Exemplos:
```javascript
const reg1 = /[12345]/

reg1.test("Temos o número 6") //false
reg1.test("Temos o número 2") //true
reg1.test("Temos o número 23") //true
reg1.test("Temos o número 26") //true
reg1.test("Temos o número 60") //false
```

Devemos cuidar, pois como o conjunto esta como 12345, se colocarmos um número 23 ou 26 (mesmo o 6 não estando no conjunto) por exemplo, a validação dara Match e o retorno será true. Isso ocorre devido o raio de buscar ser de 1 a 12345.
Agora caso testemos com 60, o Match dará false, devido nenhum número do conjunto começar com 6.

```javascript
const reg2 = /[0-9]/

reg2.test("Temos o número 89") //true
reg2.test("Temos o número 8945325345") //true
reg2.test("Temos o número") //false
```

O ideal para verificarmos se contém números em uma frase ou string é utizando da forma acima, pois irá pegar todo o raio númerico definido.

- **Caracteres especiais em regex:**

`\d` - irá permitir qualquer dígito numérico (mesma regra [0-9]);
```javascript
const dRegex = /\d/ //igual a [0-9]

dRegex.test(" ") //false
dRegex.test("1234") //true
dRegex.test("passou1234") //true
dRegex.test("passou 1234") //true
dRegex.test("passou") //false
```

`\w` - irá permitir qualquer caractere alfanumérico;
```javascript
const wRegex = /\w/

wRegex.test("passou") //true
wRegex.test(" ") //false
wRegex.test("passou 123") //true
wRegex.test("123") //true
wRegex.test("passou123") //true
```

`\s` - irá permitir qualquer caractere de espaço em branco, quebra de linha ou tabs;
```javascript
const sRegex = /\s/

sRegex.test("passou") //false
sRegex.test(" ") //true
sRegex.test("passou 123") //nesse caso retorna true devido ter espaço entre a string
sRegex.test("passou123") //false
sRegex.test("123") //false
```

`\D` - irá permitir somente caracteres que não são números;
```javascript
const dRegex2 = /\D/

dRegex2.test("passou 1234") //retorna true devido ter letras na string, então a validação de não ser número é ignorada
dRegex2.test("1234") //false
dRegex2.test("passou1234") //retorna true devido ter letras na string, então a validação de não ser número é ignorada
dRegex2.test("passou") //true
dRegex2.test(" ") //true
```

`\W` - irá permitir somente caracteres que não são alfa-numéricos;
```javascript
const wRegex2 = /\W/

wRegex2.test(" ") //true
wRegex2.test("passou") //false
wRegex2.test("123") //false
wRegex2.test("passou 123") //retorna true devido ter espaço e não ser alfa-numérico, ignorando o restando da validação
wRegex2.test("passou123") //false
```

`\S` - não irá permitir espaços, quebra de linhas ou tabs;
```javascript
const sRegex2 = /\S/

sRegex2.test(" ") //false
sRegex2.test("passou") //true
sRegex2.test("passou 123") //retorna true devido ter string com espaço, então ignora a validação
sRegex2.test("passou123") //true
sRegex2.test("123") //true
sRegex2.test("    123") //retorna true devido ter string após o tab, então ignora a validação
sRegex2.test("    ") //false
```

`.` - irá aceitar qualquer caractere, menos quebra de linha.
```javascript
const pontoRegex = /./

pontoRegex.test("passou") //true
pontoRegex.test("passou123") //true
pontoRegex.test("passou 123") //true
pontoRegex.test(" ") //true
```

> Um dica que uso é que o caractere maiúsculo é a negação do minúsculo, exemplo \d e \D.

Esses caracteres especiais nos permitem realizar verificações de várias formas, como verificar se datas estão corretas, e-mails e etc.
Isso limita a possibilidade de o usuário passar valores incorretos que possam prejudicar no Back End e Banco de Dados.

- **Operadores regex:**
