// Deque = Double Ended Queue (Fila de duas pontas)
// Permite remoções e inserções em qualquer um de seus lados

module.exports = class Deque{
    constructor(){
        this.data = []
    }

    insertFront(value){ // Inserção no inicio
        this.data.unshift(value)
    }

    insertRear(value){ // Inserção no fim
        this.data.push(value)
    }

    removeFront(){ // Remoção do inicio
        return this.data.shift()
    }

    removeRear(){ // Remoção do fim
        return this.data.pop()
    }

    peekFront(){ // Olhadinha no inicio
        return this.data[0]
    }

    peekRear(){ // Olhadinha no final
        return this.data[this.data.length - 1]
    }

    size(){ // Tamanho da fila
        return this.data.length
    }
}