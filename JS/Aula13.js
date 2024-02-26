//while -Enquanto- Alternativa "for"

let vida = 0      

while(vida < 20)
{
    vida++
}

if(vida > 5 || vida < 10)
{
    console.log("Utilize uma porcao de vida, sua vida esta baixa: " + vida)
}

else if(vida => 15)
{
    console.log("Sua vida esta cheia: " + vida)
}

else
{
    console.log("Voce esta morto!")
}