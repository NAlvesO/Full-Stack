//Sem a utilizacao dos parametros, utilizando o default!

sala();

function sala(aluno = "Aluno", pc = "Windows") {
  console.log("O " + aluno + " utiliza o computador " + pc);
}


// Com parametros definidos!

sala("Marcos","Linux");
sala("","Apple")

function sala(aluno = "Aluno", pc = "Windows") {
  console.log("O " + aluno + " utiliza o computador " + pc);
}

sala(undefined,"Apple")

function sala(aluno = "Aluno", pc = "Windows") {
  console.log("O " + aluno + " utiliza o computador " + pc);
}
