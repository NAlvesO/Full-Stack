
const totalSalas = 20

const salasComTesouro = [2, 4, 7];
const salasComMonstro = [3, 6, 8];


for (let sala = 1; sala <= totalSalas; sala++) {

    const temTesouro = salasComTesouro.includes(sala);
    const temMonstro = salasComMonstro.includes(sala);


    if (salasComTesouro == 2 || salasComTesouro == 4 || salasComTesouro == 7) 
    {
        console.log("Tesouro na sala " + salasComTesouro + "!");
    } else if (salasComMonstro == 3 || salasComMonstro == 6 || salasComMonstro == 8) 
    {
        console.log("Monstro na sala " + salasComMonstro + "!");
    }
}