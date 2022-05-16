/*

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]

//console.log(array)

//manipulando arrays
//forEach
array.forEach(function (item, index) 
{
    console.log(item,index)
})

//push adiciona no fim do array
array.push('novo item')
console.log(array)

//pop remove ultimo elemento
array.pop()
console.log(array)

//shift remove no inicio do array
array.shift()
console.log(array)

//unshift adiciona no inicio do array
array.unshift('ola pessoa')
console.log(array)

//indexOf retorna o índece de um valor
console.log(array.indexOf(true))

//splice apaga de um ponto a outro atraveis do indece
array.splice(3, 6)
console.log(array)

//slice retorna uma parte do array ja existente
let novo_array = array.slice(0,3)
console.log("novo array: " +novo_array)
*/


//Objetos
let xicara = {
    string: 'string',
    Number: Number,
    Boolean: true,
    Array: ['Array'],
    objectInterno: {objectInterno: 'objectInterno'}
}

console.log(xicara)

