// Estrutura de Decisao
// switch/case/break/default

//Quando utilizar switch? Quando tiver muitas variaveis de decisao para ser aplicada, 
//e precisa executar um bloco de comandos.

let idade = 38

switch (idade) {
 case 10:
 case 11:
 console.log("crianca")
 break

 //possivel utilizar mais de um "case", para um bloco de comandos.
 case 19:
 case 20:
 console.log("Jovem")
 break

 case 65:
 console.log("Idoso")
 break    

//caso nenhum dos "case" forem atendidos cai na mensagem de default!
 default:
 console.log("A idade informada nao foi rastreada: " + idade)
}