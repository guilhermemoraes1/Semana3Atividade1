// cria um arraylist chamado numbers
const numbers = [1,2,3,4,5];

// o código abaixo vai lançar um erro por não existir a lista chamada arr

/*
const output = arr.map((x)=>{
  return x * 2;  
});
*/

/*
  A versão certa seria trocar o 'arr' pela lista 'numbers'

  a função map itera sobre os elementos da lista numbers e retorna cada elemento multiplicado por 2,
  assim atribui a variável output um array com todos os elementos de numbers multiplicado por 2
*/ 

const output = numbers.map((x)=>{
    return x * 2;  
});

// mostra no console a lista numbers que não foi modificada

// console.log(numbers);

// caso queira mostrar a nova lista com os arrays modificados, deve usar a variável output
console.log(output);


/*

esse algoritmo cria uma lista com numeros,

então usa a função map para iterar os elementos da lista numeros 
e dentro dela retorna o elemento multiplicado por 2,

e esse array vai ser atribuido a uma variável nova chamada output,
por útimo o console.log vai mostrar no console o valor da variável output.

*/
