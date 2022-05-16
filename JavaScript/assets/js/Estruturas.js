//if
var jogador1 =1
var jogador2 =1
var placar

if(jogador1 > 0 && jogador2 === 0)
{
    console.log("Jogador 1 macro ponto!")
    placar = jogador1 > jogador2
}
else if(jogador2 > 0 && jogador1 === 0)
{
    console.log("Jogador 2 marco ponto!")
    placar = jogador2 > jogador1
}
else if((jogador1 != 0 && jogador1 === jogador2) || (jogador2 != 0 && jogador2 === jogador1))
{
    console.log("Ambos marcaram ponto!")
    placar = jogador1 === jogador2
}
else
{
    console.log("Niquem marcou ponto!")
}

//if ternario de uma linha so: codição ? verdadeira : falsa
jogador1 != -1 && jogador2 != -1 ? console.log("Jogadores validos") : console.log("Jogadores invalidos")



//switch / case
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("jogador 1 ganhou!")
        break;

    case placar = jogador2 > jogador1:
        console.log("jogador 2 ganhou!")
        break

    default:
        console.log("Impate!")
        break;
}

//Estrutura loop

let array = ['valor1','valor2','valor3','valor4','valor5']

let object = {propriedade1 : 'valor1', propriedade2 : 'valor2', propriedade3 : 'valor3',}

//for - executa um instrução até que ela seja falsa
for(let indice = 0; indice < array.length; indice++)
{
    console.log("Indice: "+indice)
    console.log("Valor do Array: "+array[indice])
}

//for / in executa repetição a partir de uma propriedade com array
for(let i in array)
{
    console.log(i)
}

//com object
for (let i in object)
{
    console.log(i)
}

//for/of executa repetição apartir de um valor
//retorna o valor do indice
for(i of array)
{
    console.log(i)
}

//com object
for(i of object.propriedade1)
{
    console.log(i)
}

//while - executa em quanto for verdadeira
let a = 0

while (a < 10) {
    a++
    console.log(a)
}

//do/while - executa primeiro e verifica depois
let b = 0

do {
    console.log(b)
    b++
} while (b < 10);