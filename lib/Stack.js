module.exports = class Stack{
    constructor(){
        this.data = [] // Armazenamento 
    }
    // Inserção na pilha 
    push(value){
        this.data.push(value)
    }
    // Remoção 
    pop(){
        return this.data.pop()
    }
    // Verificação do topo da pilha (olhadinha)
    peek(){
        return this.data[this.data.length - 1]
    }
    // Retorna o número de elementos da pilha
    size(){
        return this.data.length
    }
}