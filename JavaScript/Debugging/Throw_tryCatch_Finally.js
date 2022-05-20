/*function Verifica(string) {
    if(!string) return "string invalida"

    return string === string.split("").reverse().join('')
}*/

function Verifica(string) {
    if(!string) throw "String invalida"

    return string === string.split("").reverse().join('')
}

function VerificaTryCatch(string) {
    try {
        Verifica(string)
    } catch (error) {
        throw error
    }
}

function VerificaTryCatchFinally(string) {
    try {
        Verifica(string)
    } catch (error) {
        throw error
    }finally{
        console.log(`A string invalida foi: ${string}`)
    }
}

VerificaTryCatchFinally("")