function validaArrays(array, numero) {
    try {
        if(!array && !numero) throw new ReferenceError('Defina os parametros')

        if(typeof array !== 'object'){
            throw new TypeError('Elemento do tipo Array não definido')
        }

        if(typeof numero !== 'number'){
            throw new TypeError('Elemento do tipo Number não definido')
        }

        if(array.length !== numero)
            throw new RangeError('Tamanho do Array é invalido')

        return array
    } catch (error) {
        if(error instanceof RangeError){
            console.log('RangeError!')
            console.log(error.stack)
        }else if(error instanceof ReferenceError){
            console.log('ReferenceError!')
            console.log(error.stack)
        }else{
            console.log('Temos erros novos...Uau')
            console.log(error.stack)
        }
    }
}

console.log(validaArrays([1,2,3],3))