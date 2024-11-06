// cria um array de objetos chamado users
// cada objeto possui as chaves FirstName, lastName e age
const users=[
    {firstName:"john", lastName:"colben", age:26},
    {firstName:"jimmy", lastName:"fred", age:75},
    {firstName:"sam", lastName:"boston", age:50},
    {firstName:"ronald", lastName:"bristh", age:26},   
];

/*

usa a função map na lista users e acessa as chaves firstName e lastName de cada objeto
e as retorna as concatenando


*/
const output = users.map((x)=> x.firstName+" "+x.lastName);

// mostra no console o valor de output
console.log(output);
