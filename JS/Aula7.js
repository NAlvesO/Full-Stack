//AND &&
let pesoAtual = 80
let pesoMeta = 90

let pesoTeste = (pesoAtual <= pesoMeta)
let imcCalculate = (pesoAtual /(185 * 185)) * 10000

console.log ((pesoTeste <= pesoMeta) && (imcCalculate <= 25))