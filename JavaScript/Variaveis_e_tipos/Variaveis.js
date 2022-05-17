// a duas formas de criar um variavel: var e let
// o let respeita o escopo de bloco, ja a var não

var a = 1
var b = 2

if(a === 1){
    var a = 11// vai mudar globalmente
    let b = 22// vai mudar localmente
    console.log(a)
    console.log(b)
}

console.log(a)//continuam com o mesmo valor atribuido localmente
console.log(b)//volta ao seu valor do global

//sempre usar let ou const

var Primeiro_nome = "Capivara"
let Sobre_nome = "Brasil"

if(Primeiro_nome === "Capivara")
{
    let Sobre_nome = "Mar"
    var Primeiro_nome = "Zezinho"
    Sobre_nome = "Soares"
}

console.log(Primeiro_nome, Sobre_nome)