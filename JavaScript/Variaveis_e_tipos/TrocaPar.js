let ArrayNumeros = [1,3,4,6,80,33,23,90]

function TrocaPar(array) {
    for (let i = 0; i < array.length; i++) {
        if(!array) return -1;
        if(!array.length) return -1;


        if (array[i] === 0) {
            continue // vai iginora
        }else if (array[i] % 2 === 0) {
            console.log(`Subistituindo ${array[i]} por 0 `)
            array[i] = 0
        }
    }
    return array
}

console.log(TrocaPar(ArrayNumeros))

console.clear()

function TrocaInpar(array) {
    for (let i = 0; i < array.length; i++) {
        if(!array) return -1;
        if(!array.length) return -1;


        if (array[i] === 1) {
            continue // vai iginora
        }else if (array[i] % 2 !== 0) {
            console.log(`Subistituindo ${array[i]} por 1 `)
            array[i] = 1
        }
    }
    return array
}

let impar = [1,2,3,4,6,90,80,23,22,33]

console.log(TrocaInpar(impar))