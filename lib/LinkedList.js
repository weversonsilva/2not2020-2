/*
    Estrutura de dados Lista Encadeada
*/
class Node {
    constructor(value) {
        this.data = value   // Armazenamento
        this.next = null    // Ponteiro para o próximo nodo
    }
}

module.exports = class LinkedList {
    constructor() {
        this.head = null    // A lista inicia "sem cabeça"
        this.count = 0
    }

    // Inserção no fim da lista
    push(value) {
        let node = new Node(value)

        // Caso especial: a lista está vazia
        if(this.count === 0) {
            this.head = node
        }
        else {
            let nodePos = this.head
            // Percurso da lista para encontrar o último elemento
            while(nodePos.next != null) {
                nodePos = nodePos.next
            }
            // O último elemento ganha um nodo depois dele 
            nodePos.next = node
        }
        this.count++
    }

    // Retorna o tamanho da lista
    size() {
        return this.count
    }

    toString() {
        let output = '{ '
        let node = this.head
        while(node !== null) {
            output += node.data + ' '
            node = node.next
        }
        output += ' }'
        return output
    }

    // Insere um valor em uma posição informada pelo usuário
    insertAt(position, value){
        // Validação da posição
        if(position >= 0 && position <= this.count){
            let node = new Node(value)

            // Caso especial: inserção na posição 0
            if(position === 0){
                node.next = this.head
                this.head = node // Temos um novo head/cabeça
            }

            // Caso especial: inserção na última posição
            else if(position === this.count){
                // Redireciona para o push
                this.push(value)
                return // Evita que this.count++ seja executado novamente
            }
            else{
                let nodePos = this.head, nodePrev = null
                // O loop for começa em 1 pq 0 é o head e já está no nodePos
                for(let i = 1; i <= position; i++){
                    nodePrev = nodePos
                    nodePos = nodePos.next
                }
                // O novo passa a apontar para o proximo do nodo atual da posição
                node.next = nodePos
                // O nodo anterior passa a apontar para o novo nodo
                nodePrev.next = node
            }
            this.count++
        }
    }
    // Remoção do ultimo elemento
    pop(){
        if(this.count > 0){
            let removed

            // Caso especial: retirada do unico elemento da lista
            if(this.count === 1){
                removed = this.head
                this.head = null
            }
            else{
                let nodePos = this.head, nodePrev = null
                // Percurso lista encadeada
                while(nodePos.next != null){
                    nodePrev = nodePos
                    nodePos = nodePos.next
                }
                //o ultimo nodo é removido
                removed = nodePos
                //o penultimo nodo passa a ser o ultimo.
                // para isso indicamos que não há nada depois dele
                nodePrev.next = null
            }
            this.count--
            return removed.data          
                
            
        }
    }

   // Remoção de elemento na posição especificada
    removeAt(position) {
        // Validação da faixa de posições possíveis
        if(position >= 0 && position < this.count) {
            let removed
            // Caso especial: remoção do primeiro elemento
            if(position === 0) {
                removed = this.head
                this.head = this.head.next
            }
            else {
                let nodePos = this.head, nodePrev = null
                // O for começa em 1 porque o 0 é o head
                for(let i = 1; i <= position; i++) {
                    nodePrev = nodePos
                    nodePos = nodePos.next
                }
                removed = nodePos
                // O nodo anterior do removido passa a apontar para o nodo
                // posterior ao removido
                nodePrev.next = nodePos.next
            }
            this.count--
            return removed.data 
        }
    }

    // Retorna o elemento na posição especificada, sem retirar da lista
    getAt(position){
        // Valida a faixa de posições válida
        if(position >= 0 && position < this.count){
            // Exemplo de loop for controlado mais de uma variável
            let nodePos, i
            for(nodePos = this.head, i = 0; i < position; nodePos = nodePos.next, i++){
                // Não faz nada. Esse loop apenas serve para localizar o nodo da posição
            }
            return nodePos.data
        }
    }
    // Retorna a posição da primeira ocorrência do valor dentro da lista ou -1 caso não exista
    indexOf(value){
        for(let nodePos = this.head, i = 0; nodePos != null; nodePos = nodePos.next, i++){
            if(nodePos.data === value) return i // Valor encontrado na posição i
        }
        return -1 // Valor não encontrado 
    }
}
