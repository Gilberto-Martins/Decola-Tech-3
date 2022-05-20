/*new Error(message, fileName, lineNumber)

//todos os paramentro são opicionis

const MeuErro = new Error('Mensagem invalida')
MeuErro.name = 'Invalido'

throw MeuErro
*/


//
function MeuErro(message) {
    this.name = 'MeuErro'
    this.message = menubar || 'Mensagem de erro padrão'
    this.stack = (new Error()).stack
}

MeuErro.prototype = Object.create(MeuErro.prototype)
MeuErro.prototype.constructor = MeuErro

try {
    throw new MeuErro()
} catch (error) {
    console.log(error.name) // 'MeuErro'
    console.log(error.message) // 'Mensagem de erro padrão'
}

try {
    throw new MeuErro('Mensagem alterada')
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}