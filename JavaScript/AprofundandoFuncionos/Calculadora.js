

function Calculadora() {
    const operacao = prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 -Divisão Inteira (%)\n 6 - Potenciação (**)')

    if (!operacao || operacao >= 7) {
        alert('Operação invalida')
        Calculadora()
    } else {
        let num1 = Number(prompt('Insira o primeiro valor: '))
        let num2 = Number(prompt('Insira o segundo valor: '))
        let resultado

        function soma() {
            resultado = num1 + num2
            alert(`${num1} + ${num2} = ${resultado}`)
            Nova_operacao()
        }

        function subtracao() {
            resultado = num1 - num2
            alert(`${num1} - ${num2} = ${resultado}`)
            Nova_operacao()
        }

        function multiplicacao() {
            resultado = num1 * num2
            alert(`${num1} * ${num2} = ${resultado}`)
            Nova_operacao()
        }

        function divisao_real() {
            resultado = num1 / num2
            alert(`${num1} / ${num2} = ${resultado}`)
            Nova_operacao()
        }

        function divisao_inteira() {
            resultado = num1 % num2
            alert(`${num1} % ${num2} = ${resultado}`)
            Nova_operacao()
        }

        function potenciacao() {
            resultado = num1 ** num2
            alert(`${num1} ** ${num2} = ${resultado}`)
            Nova_operacao()
        }


        /*
        if (operacao == 1) {
            soma()
        }
        else if (operacao == 2) {
            subtracao()
        }
        else if (operacao == 3) {
            multiplicacao()
        }
        else if (operacao == 4) {
            divisao_real()
        }
        else if (operacao == 5) {
            divisao_inteira()
        }
        else if (operacao == 6) {
            potenciacao()
        }


        */
        switch (operacao) {
            case 1:
                soma()
                break;
            case 2:
                subtracao()
                break;
            case 3:
                multiplicacao()
                break;
            case 4:
                divisao_real()
                break;
            case 5:
                divisao_inteira()
                break;
            case 6:
                potenciacao()
                break;
        }




        function Nova_operacao() {
            let opicao = prompt('Deseja fazer mais Operações?\n 1 - Sim\n 2 - Não')

            if (opicao == 1) {
                Calculadora()
            } else if (opicao == 2) {
                alert("Bay-bay")
            } else {
                alert('Digite uma opição valida!')
                Nova_operacao()
            }
        }
    }


}



Calculadora()

