function Impar_par(array) 
{
    let evenNumeros = []
    for (let n = 0; n <= array.length; n++) 
    {
        if (array[n] % 2 === 0) 
        {
            evenNumeros.push(array[n])   
        }
    }
    console.log(evenNumeros)
}

var numeros = [0,1,2,3,4,5,6,7,8,9]

Impar_par(numeros)

