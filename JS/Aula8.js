//AND (&&)
let idade = 18
let vistoVerificado = false

let teste = (idade >= 18) && (vistoVerificado === true) 

console.log(teste)

//AND (&&) - 150 Moedas e 1 item estrela

let moedasColetas = 189
let itemColetado = "Estrela"
let resultado = (moedasColetas >= 150) && ((itemColetado === "Estrela")  || (itemColetado === "estrela"))

console.log(resultado)

// OR (||) - Tempo diferente de chuva e item equipado guarda chuva

let tempoAtual = "chuva"
let itemEquipado = "Espada"
let validacaos =  (tempoAtual !== "chuva") || (itemEquipado === "guarda chuva")

console.log("O personagem pode sair para aventura? " + validacaos)

// NOT (!) - Nega uma afirmacao! - Tempo acima de 10 e velocidade acima de 100
let tempo = 10
let velocidades = 120
let testepratico =  (tempo > 10) && (velocidades > 100)

console.log("O carro esta preparado para corrida? " + testepratico)
console.log ("O carro nao esta preparado para corrida? " + !testepratico)

//teste final aula

let testea = true || false 

console.log(testea)

let teste2 = true && false

console.log(teste2)