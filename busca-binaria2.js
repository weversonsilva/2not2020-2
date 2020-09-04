let comp = 0
function buscaBinaria(lista, valorBusca, fnComp) {
    let inicio = 0
    let fim = lista.length - 1
   
    while(fim >= inicio) { // fim não pode ser menor que inicio
        // Math.floor tira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)

        let res = fnComp(lista[meio], valorBusca)

        // Verifica se o valor na posição média é o valor de busca
        if(res == 0) {
            comp++
            return meio
        }
        else if(res < 0) {
            comp += 2
            fim = meio - 1
        }
        else { // res > 0
            comp += 2
            inicio = meio + 1
        }
    }
    return - 1 // Valor não encontrado
}

function comparaNome(obj, valorBusca) {
    // Os dois valores são iguais
    if(valorBusca === obj.first_name) return 0
    // Um número negativo para indicar que o primeiro < segundo
    else if(valorBusca < obj.first_name) return -1
    // Um número positivo pra indicar que o primeiro > segundo
    else return 1 // valorBusca > obj.first_name
}

let listaNomes = require('./dados/lista-nomes')

console.time('Weverson')
console.log(buscaBinaria(listaNomes, 'WEVERSON', comparaNome))
console.timeEnd('Weverson')
console.log('Comparações: ', comp)

console.log('------------------------')

comp = 0
console.time('Weverson')
console.log(buscaBinaria(listaNomes, 'WEVERSON', (obj, busca) => {
    if(busca == obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('Weverson')
console.log('Comparações: ', comp)
