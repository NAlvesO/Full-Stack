// Aplicacao do "split"

let userName = getMiddleName("Kiko Mario Jorge")
console.log("Ben vienido " + userName)

userName = getMiddleName("Lima-Costa-Ferreira")
console.log("Ben vienido " + userName)

userName = getMiddleName("Romario/Junior/Gomes")
console.log("Ben vienido " + userName)


function getMiddleName(name)
{
    let middleName = name.split(" ")[1]
    return middleName
}

//Usando o "splitChar"

let userNames = getMiddleNames("Kiko Mario Jorge", " ")
console.log("Welcome to  " + userNames)

userNames = getMiddleNames("Lima-Costa-Ferreira", "-")
console.log("Welcome to  " + userNames)

userNames = getMiddleNames("Romario/Junior/Gomes", "/")
console.log("Welcome to " + userNames)


function getMiddleNames(names,splitChar)
{
    let middleNames = names.split(splitChar)[1]
    return middleNames
}