

function selectionSort(vetor){
    let passadas = 0
    let comparacoes = 0
    let totalTrocas = 0

    // Função que encontra o menor número em um segmento de vetor (subvetor)
    // A função deve retornar a posição do menor valor encontrado
    function encontrarMenor(vetor, inicio) {
        let posMenor = inicio
        for(let i = inicio + 1; i < vetor.length - 1; i++){
            if(vetor[i] < vetor[posMenor]) posMenor = i
            comparacoes++
        }
        return posMenor
    }

    // O for EXTERNO vai até a penúltima posição
    for(i = 0; i < vetor.length - 1; i++){
        passadas++

        // Busca-se o menor valor no restante do vetor
        posMenor = encontrarMenor(vetor, i + 1)

        // Caso o valor encontrado seja menor que o valor atual, procede-se a troca 
        comparacoes++   
        if(vetor[posMenor] < vetor[i]){
            // Permuta de valores usando desestruturação
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
            totalTrocas++
        }
    }
    console.log({passadas, comparacoes, totalTrocas})
}

let nums = [56, 78, 44, 23, 99, 14, 60, 37, 6, 82, 31, 65]

console.time('num')
selectionSort(nums)
console.timeEnd('num')

console.log(nums)


let listaNomes = require('./dados/100-mil-nomes')

console.time('Nomes')
selectionSort(listaNomes)
console.timeEnd('Nomes')

console.log(listaNomes)
