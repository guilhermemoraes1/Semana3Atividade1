
// pede ao usuário pra inserir o valor no browser
const input = '132132123';

// linha está sintaticamente errada pois parserInt não é uma função, e sim parseInt

// const value = parserInt(input);

// converter o valor de input de string para inteiro
const value = parseInt(input);

// cria um novo Array usando a classe Array e está preenchendo o array com o valor null usando a função fill
const array = new Array(input).fill(null);


let values = new Array(input) // cria um novo array
.fill(null) // e preenche com null usando fill 
.map((currentValue, index) => index + 1); // pega o indice do único elemento e retorna o indice mais 1 

/*

pede ao usuário um input usando prompt
converte esse input de string para inteiro,
depois cria um novo Array chamado array usando a classe Array e preenche o array com o valor null usando a função fill
então cria um novo array chamado values e preenche com null usando fill 
e pega o indice do único elemento e retorna o indice mais 1 
por ultimo mostra

*/
