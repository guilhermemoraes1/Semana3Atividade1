// cria um arraylist chamado numbers
const numbers = [1,2,3,4,5];

/*
    essa linha está sintaxicamente errada,
    quando usar a palavra chave 'return' dentro de uma arrow function 
    ela deve estar dentro de chaves,

    2 maneiras de resolver isso:

    1- colocar o return em chaves 
    x) => {return x % 2};
    2- como o código da arrow function está presente em uma única linha,
    o return pode ser omitido
    (x) => x % 2; 

*/

/*
const isOdd = (x) =>  return x % 2; 
*/

// código corrigido
// o objetivo dessa arrow function é dizer se um número é ímpar 
// ela recebe um parametro e retorna 0 se o número for par
// e 1 se o número for ímpar

const isOdd = (x) => x % 2; 

// essa chaves sozinha não faz parte do algoritmo

// }

// o código abaixo vai lançar outro erro por não existir a lista chamada arr
/*
const output = arr.filter(isOdd);
*/

/*
    código corrigido
    passei a lista numbers para ser filtrada

    a função filter vai iterar os elementos de numeros e vai chamar a função isOddpra cada elemento, 
    se a função retornar 0, o elemento não vai ser adicionado na lista, se retornar 1 ele vai ser adicionado.

*/

const output = numbers.filter(isOdd);

// mostra no console o valor de output
console.log(output);


/*

esse algoritmo cria uma lista com numeros,
depois cria a função isOdd que recebe um parametro pra dizer se esse número é ímpar,

então usa a função filter na lista numbers e passa cada numero da lista na função isOdd,
se função retornar 0, significa que o elemento é par e não vai ser adicionado na lista, 
se retornar 1 ele é ímpar e vai ser adicionado.

por útimo o console.log vai mostrar no console o valor da variável output.


*/
