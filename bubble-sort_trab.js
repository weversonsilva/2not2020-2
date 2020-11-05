function bubbleSort(vetor, fnComp) {
    for(let i = 0; i <= vetor.length - 2; i++){
        if(fnComp(vetor[i], vetor[i+1])) {    
            [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]
        }    
    }
}

const covid = require('./dados/covid-19')

const covid1000 = covid.slice(0, 999)
console.time('Teste covid 1000')
bubbleSort(covid1000, (a, b) => a.date > b.date)
console.timeEnd('Teste covid 1000')

console.log(covid1000)