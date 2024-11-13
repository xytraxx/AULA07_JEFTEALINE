//DIFERENÇAS ENTRE VAR, LET E CONST

//VAR
var nome = "Adamastor";
console.log(nome);

if (nome === "Adamastor") {
  var escola = "CESF";
  console.log(escola);
}
console.log(escola);

escola = "Sagrada";
console.log(escola);
//com  varíavel do tipo var podemos acessar (visibilidade)
//fora do escopo de criação da varíavel

//LET
if (nome === "Adamastor") {
  let curso = "DS";
  console.log(curso);
}
//console.log(curso);
curso = "Desenvolvimento";
console.log(curso);

//let só permite o acesso à varíavel no escopo onde ele foi criada (escopo de bloco)
//se retribuimos valor a ela é como se estivéssemos declarando uma nova varíavel
//do tipo var com o mesmo nome curso

//CONST
const cargo = 'estudante';
console.log(cargo);
cargo = 'programador';
console.log(cargo);

//varíavel do tipo const tem escopo de bloco, com a let mas ela não
//permite retribuíção de valor 

//CRIAÇÃO DE VARIAVEIS SEM ATRIBUIÇÃO INICIAL
var aluno1;
aluno1 = 'Ana Clara';
console.log(aluno1);

let aluno2;
aluno2 = 'Bernardo';
console.log(aluno2);

//const aluno3; varíaveis do tipo const não podem ser apenas declaradas 
const aluno3 = 'Cremilda';
console.log(aluno3);
