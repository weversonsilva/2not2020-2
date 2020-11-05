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

const covid = require('./dados/covid-19')

const covid1000 = covid.slice(0, 1000)
console.time('Covid 1000')
bubbleSort(covid1000, (a, b) => {
     if(a.date == b.date){
        if(a.state == b.state)
            if(a.city > b.city) return true
            else return false
    }
        if(a.date == b.date){
            if(a.state > b.state) return true
            else return false
        }

            else if(a.date > b.date) return true
            else return false
})    
console.timeEnd('Covid 1000')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('Memória utilizada (Mb): ', memoria)

console.log(covid1000)