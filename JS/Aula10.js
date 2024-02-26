//elseif (if em cadeado)

let potenciaFonte = 701
let verificacaoPotencia = ""

if(potenciaFonte <= 500){
    (verificacaoPotencia = "Esta fonte esta no abaixo do recomendado: " + potenciaFonte)}

    else if(potenciaFonte > 500 || potenciaFonte <700){
        (verificacaoPotencia = "Esta fonte esta no limite do recomendado: " + potenciaFonte)
    }
    else if(potenciaFonte === 700){
        (verificacaoPotencia = "Esta fonte esta no recomendado: " + potenciaFonte)
    }

    else(potenciaFonte >700)
        (verificacaoPotencia = "Esta fonte esta no acima do recomendado: " + potenciaFonte)

console.log(verificacaoPotencia)