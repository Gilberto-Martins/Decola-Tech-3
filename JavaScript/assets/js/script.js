let contador = 0

const valor = document.getElementById('Numero')
const imp_par = document.getElementById('impa-par')

function subtrair() 
{
    if (contador <= 0) {
        contador = 0
    } else {
        contador--
    }

    if (contador % 2 === 0) {
        imp_par.innerHTML = "O valor: " + contador + " é Par"
    }
    else {
        imp_par.innerHTML = "O valor: " + contador + " é Impar"
    }
    valor.innerHTML = contador

}

function adicionar() 
{

    contador++

    if (contador % 2 === 0) {
        imp_par.innerHTML = "O valor: " + contador + " é Par"
    }
    else {
        imp_par.innerHTML = "O valor: " + contador + " é Impar"
    }

    valor.innerHTML = contador
}