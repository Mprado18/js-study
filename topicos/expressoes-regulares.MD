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

Com os operadores temos a possibilidade de aplicar validações mais elaboradas em nossas regex.

`^` - operador NOT, irá realizar uma negação em certa condição da regex;
```javascript
const notAB = /[^ab]/

notAB.test("ab") //false
notAB.test("abraço") //retorna true devido ter mais caracteres
notAB.test("AB") //retorna true devido a validação ser apenas para letras minúsculas
notAB.test("ab1") //retorna true devido ter número na string
notAB.test("a") //false
notAB.test("b") //false
```

```javascript
const notToAZ = /[^a-z]/

notToAZ.test("teste") //false
notToAZ.test("teste1") //retorna true devido ter número na string
notToAZ.test("az") //false
notToAZ.test("TESTE") //retorna true devido a validação ser apenas para letras minúsculas
notToAZ.test(" ") //retorna true devido estar apenas com espaço e a validação era para letras a-z
```

> Devemos apenas ter atenção nesse caso, pois se combinarmos valores diferentes ao que está sendo negado, a validação irá falhar

`+` - operador plus, irá permitir que um elemento possa se repetir diversas vezes;
```javascript
const variosDigitos = /\d+/

variosDigitos.test("14389453975897528965739") //true
variosDigitos.test(" ") //retorna false devido validação ser apenas para números
variosDigitos.test("testando") //retorna false devido validação ser apenas para números
variosDigitos.test("testando1234") //retorna true devido ter combinação de letras e números
variosDigitos.test("") //false
```

> Devemos apenas ter atenção nesse caso, pois se combinarmos valores diferentes ao que está sendo negado, a validação irá falhar

`?` - operador question, faz com que uma parte da validação seja opcional;
```javascript
const opc = /teste?/

opc.test("teste") //retorna true devido a validação inicial test ter sido atendida e o último "e" ser opcional
opc.test("test") //retorna true devido a validação inicial test ter sido atendida
```

```javascript
const opcional = /\d+\w?/

opcional.test("12345") //true
opcional.test("12345teste") //true
opcional.test("teste") //retorna false devido a validação obrigatória de conter números não ter sido atendida
opcional.test("12345 ") //retorna true devido a validação obrigatória de conter números ter sido atendida, então espaço em branco passa na validação opcional
```

`{}` - operador de precisão, serve para validarmos ocorrências precisas;
```javascript
const cep = /\d{5}-\d{3}/

cep.test("teste") //false
cep.test("010101-000") //true
cep.test("010101000") //false
cep.test("0101a1-000") //false
cep.test("011-000") //false
```

```javascript
const tel = /\(\d{2}\)\d{4,5}-\d{4}/

tel.test("teste") //false
tel.test("41999990000") //false
tel.test("(41)99999-0000") //true
tel.test("(41)999990000") //false
tel.test("41 99999-0000") //false
tel.test("(41)9a999-0000") //false
```

Essas validações não querem dizer que receberemos dados 100% veridicos, porém as informações inseridas pelo usuário irão entrar com a formatação e padrões corretos, o que pode diminuir a possibilidade de erros futuros.

- **Métodos regex**:

Os métodos podem nos retornar um objeto com algumas informações úteis sobre a regex.
Caso nada seja encontrado o retorno será null.

`.exec` - irá executar de forma parecida que o `.test` utilizado em todos os exemplos acima para testar a regex, porém nos dando um retorno de objeto.
```javascript
const digitos = /\d+/

digitos.exec("Tem o número 18 aqui") 
//["18", index: 13, input: "Tem o número 18 aqui", groups: undefined]
	0: "18"
	groups: undefined
	index: 13
	input: "Tem o número 18 aqui"
	length: 1
	__proto__: Array(0)

digitos.exec("Não tem número aqui") //null
```

`.match` - irá retornar o mesmo padrão de informações que o .exec, porém sua aplicação é diretamente na string;
```javascript
const frase = "Tem o número 18 aqui".match(/\d+/)

frase
//["18", index: 13, input: "Tem o número 18 aqui", groups: undefined]
	0: "18"
	groups: undefined
	index: 13
	input: "Tem o número 18 aqui"
	length: 1
	__proto__: Array(0)

const frase2 = "Tem o número aqui".match(/\d+/)

frase2 //null
```

- **Choice Pattern**:

O Choice Pattern nos permite colocar certas instruções na regex que funcionam como o **|| (OR / OU)** das condicionais.

Exemplo:
```javascript
const nome = /\D+: (Marcos|Angie|Winky)/

nome.test("Nome: 12") //false
nome.test("Nome: Marcos") //true
nome.test("Nome: Marcos12") //true
nome.test("Nome: Kratos") //false
nome.test("Marcos") //false
```

##### ALGUNS EXEMPLOS COM REGEX:

Exemplo 1:
```javascript
const validaDominio = /[?www.]\w+\.com.br|.com/

validaDominio.test("www.linkedin.com") //true
validaDominio.test("www.linkedin.com.br") //true
validaDominio.test("www.linkedin") //false
validaDominio.test("linkedin.com.br") //true
validaDominio.test("linkedin.com") //true
```

Exemplo 2:
```javascript
const validarEmail = /\w{5,20}@\w{3,15}\.\w{3,10}/

validarEmail.test("marcaop@gmail.com.br") //true
validarEmail.test("marcaop@gmail.com") //true
validarEmail.test("aqueletestemaroto12345@gmail.com.com.com.com") //true
validarEmail.test("aqueletestemaroto12345@1.com.com.com.com") //false
```

Exemplo 3:
```javascript
const validarData = /[0-31]{2}[/][0-12]{2}[/][1920-2021]{4}/

validarData.test("01/99/9999") //false
validarData.test("1/11/1999") //false
validarData.test("01/11/1999") //true
validarData.test("01/11/1800") //false
validarData.test("01/11/2022") //true
validarData.test("01/11/2023") //false
validarData.test("01-03-1950") //false
validarData.test("01031950") //false
```

> Estes exemplos não são a forma 100% correta, nota-se que em muitos casos a regex falha na validação, por isso é importante deixar o máximo travado possível, os exemplos são apenas para mostrar que com diversas combinações podemos realizar uma verificação bem detalhada de como o usuário estará enviando informações.

> Para validações mais precisas, também podemos recorrer a APIs.