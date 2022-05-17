function soma(numero1, numero2){
    var resposta // vai quarda a resposta em string

    if(numero1 === numero2)
    {
        resposta = `Os numeros ${numero1} e ${numero2} são iguais, `
    }else{
        resposta = `Os numeros ${numero1} e ${numero2} são diferentes, `
    }

    
    if(numero1 + numero2 >= 20){//se for maior que 20 já é maior que 10
        resposta += `A soma é ${numero1 + numero2}, é maior ou igual a 20.`
    }
    else if((numero1 + numero2 >= 10) && (numero1 + numero2 < 20)){
        resposta += `A soma é ${numero1 + numero2}, é maior ou igual a 10 e menor que 20.`
    }
    else if((numero1 + numero2 > 10) && (numero1 + numero2 < 20)){
        resposta += `A soma é ${numero1 + numero2}, que é maior que 10 e menor que 20.`
    }
    else if(numero1 + numero2 < 10){//se for menor que 
        resposta += `A soma é ${numero1 + numero2}, que é menor que 10 e menor que 20.`
    }
    console.log(resposta)
}

let num1 = 5
let num2 = 5

soma(num1, num2)