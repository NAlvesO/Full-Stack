//Retorno de Funcoes - Cada funcao pode retornar apenas 1 objeto/Valor

let resultado = calculo(10,20)

function calculo(A,B)
{
    return A + B
}

console.log(`O calculo vai ser igual: ${resultado} , com os valores passados!`)

///////////////////////////////////////////////////////////////////////////////////////////

let Idade = idadeMin(25,18)

function idadeMin(idadePessoa,idadeMinima)
{
    let Final = idadePessoa >= idadeMinima
    return Final

}

console.log(`De acordo com a idade minima passada, a pessoa tem a idade: ${Idade}`)