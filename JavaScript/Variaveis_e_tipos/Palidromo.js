var palidormo = "ovo"

function Verificar_Palidromo(string)
{
    if(!string) return

    //split() vai separa os caractes, reverser vai reverte a ordem, e join para juntar novamente
    return string.split("").reverse().join("") === string;
}

console.log(Verificar_Palidromo(palidormo))

function Verificador2(string) {
    if(!string) return;

    for (let i = 0; i < string.length; i++) {
        if(string[i] !== string.length - 1 -i){
            return false
        }
    }
    return true 
    
}


console.log(Verificador2(palidormo))
