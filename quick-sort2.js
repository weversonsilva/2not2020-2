let passadas = 0, comparacoes = 0, trocas = 0
/*
    fnComp -> Compara 2 elementos do vetor
    Recebe dois valores do vetor
    Retorna:
        - true, se o primeiro for maior que o segundo
        - false, caso contrário
*/
function quickSort(vetor, fnComp, inicio = 0, fim = vetor.length - 1){
    //console.log({vetor, inicio, fim})
    if(fim > inicio){ // Garante que haja pelo menos dois elementos para ordenar
        passadas++
        let posDiv = inicio - 1
        let posPivot = fim
        for(let i = inicio; i < fim; i++){
            comparacoes++
          // if(vetor[i] < vetor[posPivot]){
           if(fnComp(vetor[posPivot], vetor[i])){    
                posDiv++
                [vetor[i], vetor[posDiv]] = [vetor[posDiv], vetor[i]]
                trocas++
            }
        }
        // Último incremento de posDiv, após o loop terminar
        posDiv++    
        [vetor[posDiv], vetor[posPivot]] = [vetor[posPivot], vetor[posDiv]]
        trocas++
        quickSort(vetor, fnComp, inicio, posDiv - 1) // Lado esquerdo
        quickSort(vetor, fnComp, posDiv + 1, fim) // Lado direito
    }
}

/*
let nums = [54, 81, 72, 36, 9, 90, 63, 27, 18, 45]
quickSort(nums)
console.log(nums)
console.log({passadas, comparacoes, trocas})
*/

const candidatos = require('./dados/candidatos-2018')
console.time('Teste candidatos')
//quickSort(candidatos, (a, b) => a.NM_CANDIDATO > b.NM_CANDIDATO)

quickSort(candidatos, (a, b) => {
    //Ordenação considerando primeiro o número e depois o nome do candidato
    if(a.NR_CANDIDATO == b.NR_CANDIDATO){
        if(a.NM_CANDIDATO > b.NM_CANDIDATO) return true
        else return false
    }
    else if(a.NR_CANDIDATO > b.NR_CANDIDATO) return true
    else return false
})

console.timeEnd('Teste candidatos')
console.log('Memória usada (MB):', process.memoryUsage().heapUsed / 1024 / 1024)
console.log({passadas, comparacoes, trocas})
console.log(candidatos)