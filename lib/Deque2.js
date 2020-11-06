// Deque = Double Ended Queue (Fila de duas pontas)
// Permite remoções e inserções em qualquer um de seus lados

module.exports = class Deque{
    constructor(){ // igual ao do Queue2
        this.data = {}  // Armazenamento
        this.head = 0   // Cabeça (inicio da fila)
        this.tail = -1  // Cauda (final da fila)
    }

    insertFront(value){ // Inserção no inicio
        this.head--
        this.data[this.head] = value
    }

    insertRear(value){ // Inserção no fim // igual ao enqueue do Queue2
        this.tail++
        this.data[this.tail] = value
    }

    removeFront(){ // Remoção do inicio 
        let value = this.data[this.head]
        delete this.data[this.head]
        this.head++
        return value
    }

    removeRear(){ // Remoção do fim // igual ao dequeue do Queue2
        let value = this.data[this.tail]
        delete this.data[this.tail]
        this.tail--
        return value
    }

    peekFront(){ // Olhadinha no inicio
         return this.data[this.head]
    }

    peekRear(){ // Olhadinha no final
        return this.data[this.tail]
    }

    size(){ // Tamanho da fila
       return this.tail - this.head + 1
    }

  
}