//Atribuindo parametros nas funcoes! - Se utiliza parametros quando voce quer que a mesma funcao tenha 
//resultados diferentes!

controle("Xbox 360")
controle("Xbox Series S")

function controle (tipo) 
{
    console.log("O seu controle serve para este console: " + tipo)
}

/////////////////////////////////////////////////////////
// Utilizando mais de um parametro para a mesma funcao!

dinheiro(100, 200)
dinheiro(20,50)

function dinheiro (troco,semTroco)
{
    console.log("Voce tem troco para: R$ " + troco + " mas nao tem troco para: R$ " + semTroco)
}