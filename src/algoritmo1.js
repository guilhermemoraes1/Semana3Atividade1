// cria um arraylist chamado numeros
const numeros = [1,2,3,4,5];

// cria uma função declarativa chamada calcularDobro que recebe o parâmetro numero
function calcularDobro(numero)
{

  return numero*2; // retorna o parâmetro número multiplicado por dois
}

/* 
cria uma variável numerosDobro que recebe um array de retorno da função map 
a função map chama a função calcularDobro que itera sobre todos os elementos da lista numeros
*/
const numerosDobro = numeros.map(calcularDobro);
// mostra no console o valor de numerosDobro
console.log(numerosDobro);

/*
esse algoritmo cria uma lista com numeros,
depois cria uma função que recebe um parâmetro, dentro da função retorna o parametro multiplicado por 2,
então usa a função map para iterar a lista numeros e chama a função calcularDobro que vai retornar todos os elementos da lista multiplicado por dois,
e esse array vai ser atribuido a uma variável nova chamada numerosDobro,
por útimo o console.log vai mostrar no console o valor da variável numerosDobro.
*/
