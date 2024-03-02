//Como definir apenas o segundo parametro?


sala("Apple")

function sala(aluno = "Aluno", pc = "Windows") {
  console.log("O " + aluno + " utiliza o computador " + pc);
}


sala("","Apple")

function sala(aluno = "Aluno", pc = "Windows") {
  console.log("O " + aluno + " utiliza o computador " + pc);
}

sala(undefined,"Apple")

function sala(aluno = "Aluno", pc = "Windows") {
  console.log("O " + aluno + " utiliza o computador " + pc);
}
