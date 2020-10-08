let comparacoes = 0, divisoes = 0, juncoes = 0
function mergeSort(vetor){

    // Recebe dois vetores JÁ ORDENADOS PREVIAMENTE e os mescla
    // em um único vetor, também ORDENADO
    function mesclarVetores(vetEsq, vetDir) {
        let vetRes = [], posEsq = 0, sobra

        while(posEsq < vetEsq.length && posDir < vetDir.length){
            comparacoes++
            if(vetEsq[posEsq] < vetDir[posDir]){
                vetRes.push(vetEsq[posEsq])
            }
        }
    }
}