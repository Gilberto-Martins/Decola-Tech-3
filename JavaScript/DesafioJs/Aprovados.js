function Aprovados(arr = [] , media) {
    let aprovados = [] ;

    for (let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i]

        if (nota >= media) {
            aprovados.push(nome)
        }
    }

    return aprovados;
}

const alunos = [
    {
        nome: 'aluno1',
        nota: 3
    },
    {
        nome: 'aluno2',
        nota: 5
    },
    {
        nome: 'aluno3',
        nota: 7
    },
    {
        nome: 'aluno4',
        nota: 9
    },
    {
        nome: 'aluno5',
        nota: 6
    },
    {
        nome: 'aluno6',
        nota: 7
    },
    {
        nome: 'aluno7',
        nota: 10
    },
    {
        nome: 'aluno8',
        nota: 8
    },
    {
        nome: 'aluno9',
        nota: 4
    }
]

console.log(Aprovados(alunos, 7))




console.clear()



let data = new Date()
const anoAtual = Number(data.getFullYear())

function Calcular_idade(anoNacimento){
    return `Sua idade é de ${anoAtual - anoNacimento}.`
}

const pessoas = {
    nome: 'pessoa1'
}


//console.log(Calcular_idade.call(pessoas, 1999)) // call

console.log(Calcular_idade.apply(pessoas, [1999])) // aplply





