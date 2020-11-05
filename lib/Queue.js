// Estrutura de dados FILA
// Funcionamento FIFO = (First IN, Fisrt Out)
// (primeiro que entra é o primeiro que sai)

module.exports = class Queue{

    constructor(){
        this.data = [] // Armazenamento
    }

    // Inserção 
    enqueue(value){
        this.data.push(value)
    }

    // Remoção
    dequeue(value){
        return this.data.shift()
    }

    // Olhadinha (no início da fila)
    peek(){
        return this.data[0]
    }

    // Tamanho da fila
    size(){
        return this.data.length
    }
}