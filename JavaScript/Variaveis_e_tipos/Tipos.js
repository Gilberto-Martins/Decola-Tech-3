//para verificar o tipo de dados é so usar o typeOf

//string 

const Nome = 'neto'

console.log(typeof(Nome))

console.log(Nome.length)

let sobreNome = "Luiz"

//Metodo concat junta duas strings
let concatenado = Nome.concat(sobreNome)

console.log(concatenado, concatenado.length)

let pest = new String ("Lorem")

console.log(pest)

console.log(Nome[1])

let nom1 = "Neto"
let nom2 = "Gilberto"

//let respost = nom2 + " " + nom1
//\n quebra linha
let respost = nom2 + "\n" + nom1

console.log(respost)

// para pegar trechos de uma string
let frase = "Eu gosto de cachorros e gatos"
console.log(frase.split(" "))

console.log(frase.includes("gatos"))// true

console.log(frase.startsWith("E"))// vai perguntar se seu primeiro digito é igual ao dentro das ""

console.log(frase.endsWith("s"))//pergunta se termina a mesma forma do que foi passado em ""

console.log(frase.replace("e", "_"))

