function bubbleSort(vetor, fnComp) {
   

    // Percurso do vetor até a Penúltima Posição (length - 2)
    for(let i = 0; i <= vetor.length - 2; i++){
            
            // Comparando o elemento da posição atual [i]
            // com o elemento da frente (i + 1)
            //if(vetor[i] > vetor[i+1]) {
        if(fnComp(vetor[i], vetor[i+1])) {    
                // Troca usando desestruturação de vetor
            [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]
        }
    }    
    
}

const candidatos = require('./dados/candidatos-2018')

const candidatos1000 = candidatos.slice(0, 999)
console.time('Teste candidatos 1000')
bubbleSort(candidatos1000, (a, b) => a.NR_CANDIDATO > b.NR_CANDIDATO)
console.timeEnd('Teste candidatos 1000')

console.log(candidatos1000)