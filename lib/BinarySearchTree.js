class Node {
    constructor(value){
        this.data = value
        this.left = null //Esquerda
        this.right = null //Direita
    }
}

module.exports = class BinarySearchTree{
    constructor(){
        this.root = null //Raiz da árvore
    }

    insert(value){
        let node = new Node(value)

        // Inserção do nodo raiz (primeiro nodo)
        if(this.root === null) this.root = node
        // Busca recursiva pelo local correto de inserção
        else this.insertNode(node, this.root)
    }
    // Insere um nodo em uma subarvore a partir da raiz indicada
    // Parâmetros:
    //-node: o nodo a ser inserido
    //-node: o nodo a partir do qual será efetuada a busca
    insertNode(node, root){
        if(node.data < root.data){ // Lado esquerdo
            //Possibilidade 1: a esquerda do nó raiz está livre
            if(root.left === null) root.left = node // O nodo entra no lugar livre
            //Possibilidade 2: esquerda ocupada, renicia a busca a partir deste nodo como raiz
            else this.insertNode(node, root.left)
        }
        else if(node.data > root.data){ // Lado direito
            if(root.right === null) root.right = node
            else this.insertNode(node, root.right)
        }
    }

    // Percurso em ordem
    inOrderTraversal(fnCallback, root = this.root){
        if(root != null){
            this.inOrderTraversal(fnCallback, root.left) // Subarvore esquerda
            fnCallback(root.data) // Nó raiz
            this.inOrderTraversal(fnCallback, root.right) // Subarvore direita
        }
    }

    // Percurso pré-ordem
    preOrderTraversal(fnCallback, root = this.root){
        if(root != null){
            fnCallback(root.data) // Nó raiz
            this.preOrderTraversal(fnCallback, root.left) // Subarvore esquerda
            this.preOrderTraversal(fnCallback, root.right) // Subarvore direita
        }
    }

    // Percurso pós-ordem
    postOrderTraversal(fnCallback, root = this.root){
        if(root != null){
            this.postOrderTraversal(fnCallback, root.left) // lado esquerdo
            this.postOrderTraversal(fnCallback, root.right) // lado direito
            fnCallback(root.data)
        }
    }

    // Retorna o menor valor 
    min(){
        let minimum = this.minNode(this.root)
        if(minimum) return minimum.data
        else null
    }

    // Retorna o nodo cujo data é o menor valor da árvore
    minNode(root){
        let minimum = root
        // Vira à esquerda no root  e desce reto "toda vida"
        while(minimum != null && minimum.left != null){
            minimum = minimum.left
        }
        return minimum
    }

    max(){
        let maximum = this.maxNode(this.root)
        if(maximum) return maximum.data
        else null
    }

    maxNode(root){
        let maximum = root
        // Vira a direita no root e desce reto "toda vida"
        while(maximum != null && maximum.right != null){
            maximum = maximum.right
        }
        return maximum
    }
}