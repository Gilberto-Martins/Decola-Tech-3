// são verdadero(true) ou falso(false)

let valido = 5 === 5

console.log(valido)

let para = false
let par = 0

for (let i = 0; i <= 10; i++) {
   

    if (par > 5) {
        console.log(`O valor ${par} é maior que 5`)
        para = true
    }
    else {
        par++
    }

    
    
    if(para)
    {
        console.log("acabou")
        break
    }else{
        console.log("Continua")
    }
}