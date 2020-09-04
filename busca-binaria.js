// Pré-requisito para a busca binária: o conjunto de dados precisa estar
// ordenado pelo critério de busca
let comp = 0
function buscaBinaria(lista, valorBusca) {
    let inicio = 0
    let fim = lista.length - 1
   
    while(fim >= inicio) { // fim não pode ser menor que inicio
        // Math.floor tira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)

        // Verifica se o valor na posição média é o valor de busca
        if(valorBusca === lista[meio]) {
            comp++
            return meio
        }
        else if(valorBusca < lista[meio]) {
            comp += 2
            fim = meio - 1
        }
        else { // Valor busca é maior que meio (valorBusca > lista[meio])
            comp += 2
            inicio = meio + 1
        }
    }
    return - 1 // Valor não encontrado
}

let vetorNomes = require('./dados/vetor-nomes')

console.time('Weverson')
console.log(buscaBinaria(vetorNomes, 'WEVERSON'))
console.timeEnd('Weverson')
console.log('Comparações: ', comp)

console.log('-----------------------------')

comp = 0
console.time('Joao')
console.log(buscaBinaria(vetorNomes, 'JOAO'))
console.timeEnd('Joao')
console.log('Comparações: ', comp)