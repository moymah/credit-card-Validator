## Validador de Cartão de Crédito

Esta biblioteca tem a funcionalidade de checar se um número de Cartão de Crédito é valido, para uso em aplicações web. 

### Como instalar:

```
  $  npm install mahc3-credit-card
```

### Como utilizar:

```js
  const cardValidator = require("mahc3-cpf");
  console.log(cardValidator(00000000000)) 
 ```

### Funcionalidades: 
* Checa se um número de cartão de crédito é válido através do algoritmo de Luhn (utilizando regra matemática específica) e retorna *true* ou *false* de acordo com o caso.

### Versão:
* **1.0.0**
