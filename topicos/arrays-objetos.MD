## ARRAYS E OBJETOS JS

- **Sobre arrays:**

Os arrays são conjunto de valores que podemos declarar em variáveis.
Devem ser escritos dentro de [] e separados por vígulas, não possui restrição com tipos de dados.

`let array [1,2,3,4,5]`
`let array2 [1, "banana", 2, "laranja"]`

Não há necessidade de colocar espaços entre as vírgulas, porém fica melhor vísivel o código.

Os arrays podem ser acessados pelo nome da variável e pelos seus índices, sua contagem começa sempre com 0, sendo este o primeiro.

Exemplo, quero pegar o item dois do array2 acima, seria desta forma: `array2[1]` - //irá imprimir "banana".

- **Propriedades:**

As propriedades são informações que podemos acessar de quase todos os valores no JS.
Apenas null e undefined não possuem propriedades.

É possível acessar de duas formas:
`valor.nome da propriedade`
`valor['nome da propiedade']`

Exemplos:
```javascript
let numeros = [1,2,3,4,5];
numeros.lenght; //irá imprimir a quantidade de dados que existem no array.
```

```javascript
let nome = "Marcos";
nome.lenght; //irá imprimir quantos caracteres possui o nome.
```