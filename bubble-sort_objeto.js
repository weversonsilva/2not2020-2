/*
    Adaptando o algoritmo BUBBLE SORT para operar com vetor de objetos
    1) Acrescentar um novo parâmetro, que vai corresponder à função de comparação (fnComp)
    2) Essa função será chamada de dentro do bubbleSort(), recebendo o elemento  da posição
    atual e da posição seguinte como parâmetros.
    Ela deve retornar true caso o primeiro parâmetro seja maior que o segundo,
    ou false caso contrário.
*/

/* Algoritmo de ordenação Bubble Sort

Estratégia
Percorrer o vetor de dados, comparando elementos adjacentes
e promovendo a troca quando o sucessor é maior que o antecessor

O percurso no vetor é feito tantas vezes quando necessário, até
que nenhuma troca seja efetuada no percurso.
*/

function bubbleSort(vetor, fnComp) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    let trocas
    do {
        passadas++
        trocas = 0

        // Percurso do vetor até a Penúltima Posição (length - 2)
        for(let i = 0; i <= vetor.length - 2; i++){
            comparacoes++
            // Comparando o elemento da posição atual [i]
            // com o elemento da frente (i + 1)
            //if(vetor[i] > vetor[i+1]) {
            if(fnComp(vetor[i], vetor[i+1])) {    
                // Troca usando desestruturação de vetor
                [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]
                trocas++
                totalTrocas++
            }
        }    
    }while(trocas > 0)
    // Exibindo as estatísticas
    console.log({passadas, comparacoes, totalTrocas})
}

const candidatos = require('./dados/candidatos-2018')
/*
console.time('Teste candidatos')
bubbleSort(candidatos, (a, b) => a.NR_CANDIDATO > b.NR_CANDIDATO)
console.timeEnd('Teste candidatos')

console.log(candidatos)
*/

// Fazendo um map() para produzir um novo vetor só com os nomes dos candidatos
const nomeCandidatos = candidatos.map(o => o.NM_CANDIDATO)
console.log(nomeCandidatos)

// Teste com localeCompare()
// Fatiando 1000 primeiros candidatos
// localeCompare() faz corretamente a ordenação considerando os acentos mas é muito demorado
const candidatos1000 = candidatos.slice(0, 999)
console.time('Teste candidatos 1000')
bubbleSort(candidatos1000, (a, b) => a.NM_URNA_CANDIDATO.localeCompare(b.NM_URNA_CANDIDATO, 'pt-BR')>0)
console.timeEnd('Teste candidatos 1000')

console.log(candidatos1000)