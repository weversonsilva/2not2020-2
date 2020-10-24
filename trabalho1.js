function bubbleSort(vetor, fnComp) {
        // Percurso do vetor até a Penúltima Posição (length - 2)
        for(let i = 0; i <= vetor.length - 2; i++){
            if(fnComp(vetor[i], vetor[i+1])) {    
            // Troca usando desestruturação de vetor
            [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]
            }
        }    
}

const covid = require('./dados/covid-19')

const covid1000 = covid.slice(0, 999)
console.time('Teste Covid 25000')
bubbleSort(covid1000, (a, b) => {
   if(a.date == b.date){
        if(a.state > b.state) return true
        else return false
    }
    else if(a.date > b.date) return true
    else return false
})
console.timeEnd('Teste Covid 25000')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024
console.log('Memória utilizada (Mb): ', memoria)
console.log(covid1000)
